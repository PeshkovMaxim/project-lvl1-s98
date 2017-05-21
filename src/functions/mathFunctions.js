
export const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

export const getBalance = (array, acc) => {
  const newArray = array;
  if (acc === 3) {return 'end'};
  console.log(newArray);
  let max = Math.max.apply(null, newArray);
  let min = Math.min.apply(null, newArray);
  console.log(typeof(max), max, min);
  const iMax = newArray.indexOf(`${max}`);
  const iMin = newArray.indexOf(`${min}`);
  console.log('index', iMax, iMin);
  if (max - min > 1) {
    min += 1;
    max -= 1;
    newArray[iMax] = max;
  console.log('замена значения', newArray[iMax]);
    newArray[iMin] = min;
    console.log('замена значения', newArray[iMin]);
    console.log(newArray, 'преобразованный масив');
    return getBalance(newArray, acc + 1, 'цикл');
  }
  if (max - min === 1 || max === min) {
    return console.log(newArray.sort(), 'сортировка');
  }
  return newArray;
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
  const del = (number, acc) => {
    if (acc === number) {
      return 'yes';
    }
    if (number === 2) {
      return 'yes';
    }
    if (number % acc === 0) {
      return 'no';
    }
    if (number % acc !== 0) {
      return del(number, acc + 1);
    }
    //return der(number, acc +1);
  };
  return del(number, 2);
};

export default { getNumber, dataToString, getBalance, progression, prime };
