# TODO

- [x] Update `saveToWebdav`: Do not attempt to use the WebDAV client if WebDAV configs are undefined.

- [~] Deploy the Pie Generator API

    * ~~[Vercel's guide](https://vercel.com/guides/using-express-with-vercel)~~.
      It was very "intrusive" and very Next-y.
      ```json
      { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
      ```

    * ~~[`express-vercel`](https://github.com/akhilome/express-vercel)~~.
      I just copied their `vercel.json` config. It worked locally (`vercel dev`), but fails when deployed:
      ```json 
      {
        "version": 2,
        "builds": [{ "src": "app.js", "use": "@vercel/node" }],
        "routes": [{ "src": "(.*)", "dest": "app.js" }]
      }
      ```
      [libfontconfig.so.1: cannot open shared object file: No such file or directory · vercel/community · Discussion #5622](https://github.com/vercel/community/discussions/5622)

    * [ ] Turn it into a NextJS app.

---

END.
