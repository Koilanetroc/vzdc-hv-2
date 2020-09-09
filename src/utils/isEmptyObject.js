/**
 * Check the current object is empty.
 *
 * @param {object} object Any object to check
 * @returns {boolean}
 */
export default function isEmptyObject(object) {
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      return false;
    }
  }

  return JSON.stringify(object) === JSON.stringify({});
}
