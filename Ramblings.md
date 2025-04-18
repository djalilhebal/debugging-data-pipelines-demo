# Ramblings

Filestash configuration:
- http://127.0.0.1:8334/admin/backend

---

## Possible questions/challenges

- Concurrent access or locking in WebDAV
  * It should not concern us as there should be only 1 writer and multiple readers.

---

LINKEDIN POST:

TLDR: Reusing boring technologies to create an interesting collective: a way to inspect Excel.

When working on data-heavy systems, we often need to inspect how information changes from stage to stage. Maybe your QA team needs to validate specific data transformations, or your product manager wants to see the actual Excel file being generated.

The traditional approach? Save files locally, then manually transfer them for sharing. It's tedious, error-prone, and completely breaks your workflow. There has to be a better way.

The solution:

I've built a streamlined approach using WebDAV and Filestash that seamlessly handles this workflow. By treating WebDAV as a "poor man's Google Drive," your application can automatically save in-memory data artifacts to a WebDAV server, making them instantly browsable and shareable through a web interface.

I came up with this approach while exploring Apache Jackrabbit and other WebDAV implementations, and it's changed how I handle debugging data pipelines entirely.


## WebDAV-related

Tested:

- [x] Filestash: `sudo docker compose up`
  * "A Dropbox-like file manager that let you manage your data anywhere it is located"
  * https://github.com/mickael-kerjean/filestash
  * https://demo.filestash.app/login?type=webdav&url=https%3A%2F%2Fwebdav.filestash.app&username=&password=

- [ ] Apache Jackrabbit
  * Server, in Java.
  * Has client component.
  * 2025-04-10 Failed to run it either using standalone jar or war with Tomcat and Wildfly.

- [x] WebDAV CLI client: `cadaver` https://github.com/notroj/cadaver

- [x] dufs https://github.com/sigoden/dufs
  * Server, in Rust.
  * Has docker image: "docker run -v `pwd`:/data -p 5000:5000 --rm sigoden/dufs /data -A"
  * [x] `cargo install dufs`

- [ ] SFTPGo https://github.com/drakkan/sftpgo
  * Server, in Go.
  * Has docker image.

- [ ] https://github.com/hacdias/webdav
  * Server, in Go.
  * Has docker image.


## S3-related

- [x] Try MinIO
  * [x] Linux binary https://min.io/open-source/download?platform=linux
  * [x] Docker Compose, bridge network (`http://minio:9000`).


---

END.
