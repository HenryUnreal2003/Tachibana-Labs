function circulo() {
    let radio = parseFloat(document.querySelector('#radio').value);

    area = Math.PI*Math.pow(radio,2);

    document.querySelector('#area').value = (area).toFixed(3); 
}

