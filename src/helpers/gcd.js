function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

export default gcd;
