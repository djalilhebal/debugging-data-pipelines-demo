# Ramblings

---

Tested:

- [x] WebDAV CLI client: `cadaver` https://github.com/notroj/cadaver

- [x] Filestash: `sudo docker compose up`
  * "A Dropbox-like file manager that let you manage your data anywhere it is located"
  * https://github.com/mickael-kerjean/filestash
  * https://demo.filestash.app/files/
  * https://demo.filestash.app/login?type=webdav&url=https%3A%2F%2Fwebdav.filestash.app&username=&password=

- [ ] Apache Jackrabbit
  * Server, in Java.
  * 2025-04-10 Failed to run it either using standalone jar or war with Tomcat and Wildfly.

- [x] dufs https://github.com/sigoden/dufs
  * Server, in Rust.
  * Has docker image: "docker run -v `pwd`:/data -p 5000:5000 --rm sigoden/dufs /data -A"
  * [x] `cargo install dufs`

- [ ] https://github.com/hacdias/webdav
  * Server, in Go.
  * Has docker image.

- [ ] SFTPGo https://github.com/drakkan/sftpgo
  * Server, in Go.
  * Has docker image.

Alternatives:

- [ ] [Nextcloud](https://nextcloud.com/)
  * https://github.com/nextcloud
  * It uses either Collabora Online or OnlyOffice.
  * Seems to be trying to do too much, but it's popular.


## Solving problems visually

A simplified nurse scheduling problem (NSP) solution validator.

It checks only 2 conditions:
- REQ 1: At least 2 nurses per day.
- REQ 2: No nurse is scheduleted on a day that falls in their unavailability range (conge)

Refs:
- Nurse scheduling problem - Wikipedia https://en.wikipedia.org/wiki/Nurse_scheduling_problem
- Cascada - Night Nurse (Ryan Thistlebeck vs. Dan Winter Video Edit HD) - YouTube https://www.youtube.com/watch?v=NGRgKnbosQY
- Danny Don't You Know - NSP - YouTube https://www.youtube.com/watch?v=kT8cX2-_7pQ


## Spiral

Sync locations to firebase

Use jsoncanvas vanilla js

Use Graphviz to order nodes
    Use Graphviz Wasm (viz.js)
    https://viz-js.com/
    https://github.com/mdaines/viz-js

---

END.
