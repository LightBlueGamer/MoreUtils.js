/**
 * @function
 * @name randomItem
 * @arg {Array} - The array to get a random item from
 * @returns {*} Returns a random item from a array
 * @throws {TypeError} Will throw a type error if input was not of type Array 
 */
module.exports = function randomItem(arr) {
  if(!Array.isArray(arr)) throw new TypeError(`The type '${typeof arr}' is not of type array.`);
  return arr[Math.floor(Math.random()*arr.length)];
};
