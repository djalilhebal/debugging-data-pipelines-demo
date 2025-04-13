# Debugging data pipelines: From memory to file with WebDAV

For a better DX. Saving an viewing intermediate files or ephemeral file-like data artifacts using WebDAV and Filestash.

I've wondered what the hell is the deal with [Apache Jackrabbit][jackrabbit], WebDAV, CalDAV, etc.

Now, they are starting to make sense.


## Idea

Think: A poor man's Google Drive.

### Background

Suppose you are working on a complex data-heavy system, say a business intelligence platform called Pie.

You need to debug its internal data processing pipelines--how data changes from stage to stage, from start to finish.
The QA team might benifit from checking some specific pieces of information that's otherwise hard to validate end-to-end.
Your PM might ask you to just them the actual Excel file and formulas being used, so you have to actually write a file, copy it, and email it. This might happen more than once as business requirements and implementation change.

You see, that was a common pain point. Poor DX.

The **ideal approach** would be to automatically export the in-memory data as file, upload it to Google Drive, making it easy to open on Google Sheets, for example.

Up until recently, my **crude approach** was to write data as `.tsv` in a local folder when running on my machine. I would open it using LibreOffice Calc or Google Sheets since they support importing tsv.

I then came then up with a more **streamlined approach**: Save data as Excel to a WebDAV server (Apache Jackrabbit or probably a simpler more dedicated server), open it in Filestash.
Filestash is a web client that supports WebDAV and previews Excel files.
Both the server and client can be dockerized, so we can use them during local or remote dev.

Wins:

- Simplifies debugging.

- Better transparency and observability.

- We can save the file to WebDAV and log its URL in our log management solution (OpenObserve or Datadog).

Challenges:

- File conflicts.
Easily solveable: Each operation or job should use a unique prefix or folder. This should be a "Correlation ID" if it exists.
Otherwise, a random (preferabely sortable) key is cool, something like [Snowflake ID][snowflake-id] or [UUID v7][uuid-v7].

- Data retention policy. When and how to delete old files/folders?
Apache Jackrabbit supports querying nodes and lets us specify custom metadata (e.g. "neverExpires" or "expiresOn" or whatever). That simplifies data manipulation.
Still, we could use simple deletion logic (e.g. older than 3 days) via a `cron` job.

- How to send data to the server?
Options:
  * [x] Install a WebDAV client (I mean, what's a new JS dependency).
  * [ ] Use a WebDAV server that has a RESTful API: [SFTPGo][sftpgo], for example.



- What about performance?
  * Each job generates a couple files.
  * Overhead does not matter since we only use for debugging locally. We might enable it in dev, but obviously not prod.
  * Network overhead does not matter since the backend server and WebDAV server are on the same "machine".

> ![](./components.tldr.png)
> Main components


## Experiment

### Scenario: Analytics Platform

Suppose you are working on an analytics platform called Pie.

Steps:

- Get labels and their associated values from the request.

- Generate a pie chart image (in-memory).

- Generate an Excel file with that chart (in-memory).

- Send that file as response.

Example:
http://127.0.0.1:3000/pie?a=10&b=20&c=70


### WebDAV Server

Using [`dufs`][dufs]
```sh
dufs --auth admin:admin@/:rw --allow-all
```

### Client

Using [`webdav`][npm-webdav]:
```js
import { createClient } from "webdav";

const client = createClient("http://192.168.100.11:5000/", { username: "admin", password: "admin" });

await client.putFileContents("/omega/deep/test.txt", "some text");
```


```js
const directoryItems = await client.getDirectoryContents("/");
console.table(directoryItems);
```

### Filestash

See [Filestash install guide](https://www.filestash.app/docs/install-and-upgrade/).

Basically, just use Docker Compose to setup Filestash and Collabora Online and link them together.

I modified the `docker-compose.yml` file to also setup `dufs` as our WebDAV server.

How to run locally:
```sh
cd filestash

# Setups up dufs WebDAV server, Filestash, and Collabora Online
sudo docker compose up -d

sudo docker compose down
```

(The docker-compose thing does not follow best practices and can be greatly improved.
I am not a DevOps engineer and even can can realize that.)


## Conclusion

It works.

???

See:
- Experiment's code (server and pie app): https://github.com/djalilhebal/log-to-webdav-demo


<!-- LINK DEFS -->

[snowflake-id]: https://en.wikipedia.org/wiki/Snowflake_ID
[uuid-v7]: https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_7_(timestamp_and_random)

[sftpgo]: https://github.com/drakkan/sftpgo
[dufs]: https://github.com/sigoden/dufs
[npm-webdav]: https://github.com/perry-mitchell/webdav-client
[apache-jackrabbit]: https://jackrabbit.apache.org/
