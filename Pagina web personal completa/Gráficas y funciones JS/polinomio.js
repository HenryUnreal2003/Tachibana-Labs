function polinomio(x) {
  let grado = parseFloat(document.querySelector('#grado').value);
  
  document.querySelector('#y').value = `2x^${grado}+3x^2+5x+10`;
  return 2*Math.pow(x,grado)+3*Math.pow(x,2)+5*x+10;
}