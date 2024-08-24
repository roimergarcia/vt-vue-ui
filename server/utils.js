import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)

export const readJSON = (path) => require(path)

/**
 *
 * @param {String} text Text to clean
 */
export const regexClean = (text) => {
  return text.replaceAll(/[^\w,. -]+/g, '')
}
