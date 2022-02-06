function getGcd(a, b) {
  return b ? getGcd(b, a % b) : a;
}

export default getGcd;
