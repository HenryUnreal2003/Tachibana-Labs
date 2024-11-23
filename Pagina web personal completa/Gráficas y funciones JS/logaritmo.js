function logaritmo(x,base) {
  if (x <= 0) {
    return NaN; 
  }
  return Math.log(x)/Math.log(base);
}