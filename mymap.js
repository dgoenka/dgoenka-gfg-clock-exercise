Array.prototype.mymap = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('Array.prototype.mymap called on null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }

  const O = Object(this);
  const len = O.length >>> 0;
  const result = new Array(len);

  for (let k = 0; k < len; k++) {
    if (k in O) {
      result[k] = callback.call(thisArg, O[k], k, O);
    }
  }

  return result;
}

const a = [1, 2, 3];
const b = a.mymap(x => x * 2);
console.log(b); // [2, 4, 6]


