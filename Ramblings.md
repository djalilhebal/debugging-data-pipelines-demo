# Ramblings

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

---

END.
