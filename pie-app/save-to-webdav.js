import { createClient } from "webdav";

// e.g. "http://192.168.100.11:5000/"
/** @type {string | undefined} */
const WEBDAV_HOST = process.env.WEBDAV_HOST;
const WEBDAV_USERNAME = process.env.WEBDAV_USERNAME;
const WEBDAV_PASSWORD = process.env.WEBDAV_PASSWORD;

const isWebdavSetup = Boolean(WEBDAV_HOST);

const client = createClient(WEBDAV_HOST, { username: WEBDAV_USERNAME, password: WEBDAV_PASSWORD });

/**
 * Save data to WebDAV.
 * 
 * @param {string} filepath
 * @param {Buffer} contents
 * @returns {Promise<void>}
 */
export async function saveToWebdav(filepath, contents) {
  if (!isWebdavSetup) {
    return;
  }

  await client.putFileContents(filepath, contents);
}
