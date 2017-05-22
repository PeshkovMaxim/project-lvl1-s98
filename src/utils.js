
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
  const iMax = newArray.indexOf(max);
  const iMin = newArray.indexOf(min);
  if (max - min > 1) {
    min += 1;
    max -= 1;
    newArray[iMax] = max;
    newArray[iMin] = min;
    return getBalance(newArray);
  }
  if (max - min === 1 || max === min) {
    return newArray.sort();
  }
  return newArray;
};

export const dataToNumber = (aRRay) => {
  const newArray = aRRay;
  const iter = (mass, acc) => {
    if (acc === mass.length) {
      return mass;
    }
    newArray[acc] = Number(mass[acc]);
    return iter(aRRay, acc + 1);
  };
  return iter(aRRay, 0);
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


export const progression = (a, b, c) => {
  let str = a;
  const newArray = [];
  const iter = (d, acc) => {
    if (acc === c) {
      return newArray;
    }
    newArray[newArray.length] = str;
    str += d;
    return iter(d, acc + 1);
  };
  return iter(b, 0);
};

export const prime = (number) => {
  const del = (num, acc) => {
    if (acc === num) {
      return 'yes';
    }
    if (num === 2) {
      return 'yes';
    }
    if (num % acc === 0) {
      return 'no';
    }
    return del(num, acc + 1);
  };
  return del(number, 2);
};

export default { getNumber, dataToString, getBalance, progression, prime, dataToNumber };
