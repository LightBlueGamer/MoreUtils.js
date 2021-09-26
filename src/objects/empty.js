/**
 * @function
 * @name empty
 * @arg {Object} - The object of which to check if it's empty
 * @returns {boolean} Returns true if the object is empty
 * @throws {TypeError} Will throw a type error if input was not of type Object 
 */
module.exports = function empty(x) {
  if (Boolean(x) && x.constructor === Object) return Object.keys(x).length <= 0;
  else throw new TypeError(`The type '${typeof x}' is not of type object.`);
};
