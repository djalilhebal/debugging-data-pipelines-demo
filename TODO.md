# TODO

- [x] Update `saveToWebdav`: Do not attempt to use the WebDAV client if WebDAV configs are undefined.

- [x] Deploy the Pie Generator API

    * [ ] Turn it into a NextJS app.

    * ~~[Vercel's guide](https://vercel.com/guides/using-express-with-vercel)~~.
      It was very "intrusive" and very Next-y.
      ```json
      { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
      ```

    * ~~[`express-vercel`](https://github.com/akhilome/express-vercel)~~.
      I just copied their `vercel.json` config.
      ```json 
      {
        "version": 2,
        "builds": [{ "src": "app.js", "use": "@vercel/node" }],
        "routes": [{ "src": "(.*)", "dest": "app.js" }]
      }
      ```

      It worked locally (`vercel dev`), but fails when deployed due to `skia-canvas` (Skia-backed) native dependencies. I replace it with `canvas` (Cairo-backed). It worked.
        ```
        Error: libfontconfig.so.1: cannot open shared object file: No such file or directory
            at Module._extensions..node (node:internal/modules/cjs/loader:1586:18)
            at Module.load (node:internal/modules/cjs/loader:1288:32)
            at Module._load (node:internal/modules/cjs/loader:1104:12)
            at /opt/rust/nodejs.js:2:12169
            at Function.fr (/opt/rust/nodejs.js:2:12547)
            at Ee.e.<computed>.we._load (/opt/rust/nodejs.js:2:12139)
            at Module.require (node:internal/modules/cjs/loader:1311:19)
            at s (/opt/rust/bytecode.js:2:1094)
            at Object.<anonymous> (/var/task/pie-generator-backend/node_modules/skia-canvas/lib/classes/neon.js:15:29)
            at Module.<anonymous> (/opt/rust/bytecode.js:2:1435) {
          code: 'ERR_DLOPEN_FAILED'
        }
        Node.js process exited with exit status: 1. The logs above can help with debugging the issue.
        ```


---

END.
