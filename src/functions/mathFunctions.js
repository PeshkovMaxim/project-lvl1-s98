export const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};
export default { getNumber, gcd };
