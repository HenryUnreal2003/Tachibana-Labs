function coshi(x) {
  let num2 = parseFloat(document.querySelector('#num2').value);
  
  document.querySelector('#y4').value = `cosh(${num2}*x)`;
  return Math.cosh(num2*x);
}