function seno(x) {
  let num = parseFloat(document.querySelector('#num').value);
  
  document.querySelector('#y2').value = `${num}*sen(x)`;
  return num*Math.sin(x);
}