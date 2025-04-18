import { createClient } from "webdav";

/**
 * For example, "http://192.168.100.11:5000/"
 * @type {string | undefined}
 * */
const WEBDAV_URL = process.env.WEBDAV_URL;
const WEBDAV_USERNAME = process.env.WEBDAV_USERNAME;
const WEBDAV_PASSWORD = process.env.WEBDAV_PASSWORD;

const isWebdavSetup = Boolean(WEBDAV_URL);

/**
 * @type {import("webdav").WebDAVClient | undefined}
 */
let client;
if (isWebdavSetup) {
  client = createClient(WEBDAV_URL, { username: WEBDAV_USERNAME, password: WEBDAV_PASSWORD });
} else {
  console.warn("WebDAV is not configured. Future calls to `saveToWebdav` will be no-op.");
}

/**
 * Save data to WebDAV.
 * 
 * @param {string} filepath
 * @param {Buffer} data
 * @returns {Promise<void>}
 */
export async function saveToWebdav(filepath, data) {
  if (!isWebdavSetup) {
    return;
  }

  try {
    await client.putFileContents(filepath, data);
  } catch (error) {
    console.error(`Failed to save to WebDAV at ${filepath}:`, error);
  }

}
