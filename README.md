# Debugging data pipelines

For [Debugging data pipelines: From memory to file with WebDAV](https://kunzite.cc/debugging-data-pipelines-with-webdav)

See: [Pie Generator (live)](https://debugging-data-pipelines-demo.vercel.app/pie?a=10&b=20&c=70)


## Running locally

Assuming you already have installed Node (e.g. via `nvm`) and Docker Compose (e.g. via `apt`).

Demo API (Pie app)
```sh
cd pie-generator-backend

npm install

npm start
```

Filestash and stuff:
```sh
cd debug-drive

# Sets up dufs WebDAV server, Filestash, and Collabora Online
sudo docker compose up -d

sudo docker compose down
```

---

END.
