
export const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

export const getBalance = (array) => {
  const newArray = array;
  let max = Math.max.apply(null, newArray);
  let min = Math.min.apply(null, newArray);
  const iMax = newArray.indexOf('max');
  const iMin = newArray.indexOf('min');
  if (max - min > 1) {
    min += 1;
    max -= 1;
    newArray[iMax] = max;
    newArray[iMin] = min;
    newArray.sort();
    return getBalance(newArray);
  }
  if (max - min === 1) {
    return newArray;
  }
  return getBalance(newArray);
};

export const dataToString = (array) => {
  let str = '';
  const iter = (mass, acc) => {
    if (acc === mass.length) {
      return str;
    }
    const newArray = mass;
    str += newArray[acc].toString();
    return iter(array, acc + 1);
  };
  return iter(array, 0);
};

export default { getNumber, dataToString, getBalance };
