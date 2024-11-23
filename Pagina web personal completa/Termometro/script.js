function convertTemperature() {
    const temp = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
  
    if (isNaN(temp)) {
      document.getElementById("result").innerText = "Por favor, introduce un valor numérico válido.";
      return;
    }
  
    let tempInCelsius;
  
    // Convertir de la unidad de origen a Celsius
    switch (fromUnit) {
      case "C":
        tempInCelsius = temp;
        break;
      case "F":
        tempInCelsius = (temp - 32) * 5 / 9;
        break;
      case "K":
        tempInCelsius = temp - 273.15;
        break;
      case "R":
        tempInCelsius = (temp - 491.67) * 5 / 9;
        break;
    }
  
    let convertedTemp;
  
    // Convertir de Celsius a la unidad deseada
    switch (toUnit) {
      case "C":
        convertedTemp = tempInCelsius;
        break;
      case "F":
        convertedTemp = (tempInCelsius * 9 / 5) + 32;
        break;
      case "K":
        convertedTemp = tempInCelsius + 273.15;
        break;
      case "R":
        convertedTemp = (tempInCelsius * 9 / 5) + 491.67;
        break;
    }
  
    document.getElementById("result").innerText = 
      `${temp} ${fromUnit} = ${convertedTemp.toFixed(2)} ${toUnit}`;
  }