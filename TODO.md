# TODO

- [x] Update `saveToWebdav`: Do not attempt to use the WebDAV client if WebDAV configs are undefined.

- [~] Deploy the Pie Generator API

    * ~~[Vercel's guide](https://vercel.com/guides/using-express-with-vercel)~~
    It was very "intrusive" and very Next-y.
    ```json
    { "version": 2, "rewrites": [{ "source": "/(.*)", "destination": "/api" }] }
    ```

    * ~~[`express-vercel`](https://github.com/akhilome/express-vercel)~~
    I just copied their `vercel.json` config. It worked:
      ```json 
      {
        "version": 2,
        "builds": [{ "src": "app.js", "use": "@vercel/node" }],
        "routes": [{ "src": "(.*)", "dest": "app.js" }]
      }
      ```

---

END.
