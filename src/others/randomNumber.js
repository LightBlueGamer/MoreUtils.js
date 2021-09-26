/**
 * @function
 * @name randomNumber
 * @arg {Number} Min - The minimum amount to return
 * @arg {Number} Max - The maximum amount to return
 * @returns {Number} Returns a random number between min and max
 * @throws {TypeError} Will throw a type error if either parameter was not of type Number 
 */
module.exports = function randomNumber(min, max) {
  if(typeof min !== "number") throw new TypeError(`The type '${typeof min}' is not of type number.`);
  if(typeof max !== "number") throw new TypeError(`The type '${typeof max}' is not of type number.`);
  return Math.floor(Math.random() * (max - min) + min);
};
