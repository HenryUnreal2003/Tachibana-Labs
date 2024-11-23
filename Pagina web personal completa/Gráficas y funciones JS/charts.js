google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawCircle);
google.charts.setOnLoadCallback(drawPoli);
google.charts.setOnLoadCallback(drawSin);
google.charts.setOnLoadCallback(drawLog);
google.charts.setOnLoadCallback(drawCosh);


function drawCircle() {
      var data = new google.visualization.DataTable();      
      data.addColumn('number', 'X');
      data.addColumn('number', 'Área');
      
      const xy = [];
      const points = 100;
      let radio = parseFloat(document.querySelector('#radio').value);

      for (let i = 0; i < points; i++) {
        let angle=(i/points)*2*Math.PI;
        xy.push([radio*Math.cos(angle),radio*Math.sin(angle)]);
      }
      console.log(xy);
      data.addRows(xy);
      /* datapoint.addRows(point); */
      /* data.addRows(point); */
      var options = {
        title: 'Círculo',
        hAxis: {
          title: 'X'
        },
        vAxis: {
          title: 'Y'
        },
        backgroundColor: '#ffff',
      };

      var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
      chart.draw(data, options);
     
    }
    function graficarCirculo() {
      circulo(); 
      drawCircle(); 
  }

  function drawPoli() {
    var data = new google.visualization.DataTable();      
    data.addColumn('number', 'X');
    data.addColumn('number', 'Y(X)');
    
    var Polidata = [];

    for (var x =-20; x <=20; x+=0.5) {
      Polidata.push([x,polinomio(x)]);
    }
    console.log(Polidata);
    data.addRows(Polidata);
    /* datapoint.addRows(point); */
    /* data.addRows(point); */
    var options = {
      title: 'Polinomio',
      hAxis: {
        title: 'X'
      },
      vAxis: {
        title: 'Y'
      },
      backgroundColor: '#ffff',
    };

    var chart2 = new google.visualization.LineChart(document.getElementById('chart_div2'));
    chart2.draw(data, options); 
  }
  function graficarPolinomio() {
    drawPoli(); 
}
function drawSin() {
  let num = parseFloat(document.querySelector('#num').value);
  var data = new google.visualization.DataTable();      
  data.addColumn('number', 'X');
  data.addColumn('number', 'Función seno');
  
  var Sendata = [];

  for (var x =-10; x <=10; x+=0.1) {
    Sendata.push([x,seno(x)]);
  }
  console.log(Sendata);
  data.addRows(Sendata);
  /* datapoint.addRows(point); */
  /* data.addRows(point); */
  var options = {
    title: 'Función seno',
    hAxis: {
      title: 'X'
    },
    vAxis: {
      title: 'Y'
    },
    backgroundColor: '#ffff',
  };

  var chart3 = new google.visualization.LineChart(document.getElementById('chart_div3'));
  chart3.draw(data, options); 
}
function graficarSeno() {
  drawSin(); 
}
function drawLog() {
  let base = parseFloat(document.querySelector('#base').value);
  document.querySelector('#y3').innerHTML = `log<sub>${base}</sub>(x)`;

  var data = new google.visualization.DataTable();      
  data.addColumn('number', 'X');
  data.addColumn('number', 'Función logarítmica');
  
  var Logdata = [];

  for (var x =1; x <=40; x++) {
    Logdata.push([x,logaritmo(x,base)]);
  }
  console.log(Logdata);
  data.addRows(Logdata);
  /* datapoint.addRows(point); */
  /* data.addRows(point); */
  var options = {
    title: 'Función logarítmica',
    hAxis: {
      title: 'X'
    },
    vAxis: {
      title: 'Y',
      minValue: 0, 
      maxValue: 5
    },
    backgroundColor: '#ffff',
  };

  var chart4 = new google.visualization.LineChart(document.getElementById('chart_div4'));
  chart4.draw(data, options); 
}
function graficarLogaritmo() {
  drawLog(); 
}
function drawCosh() {
  let num2 = parseFloat(document.querySelector('#num2').value);
  var data = new google.visualization.DataTable();      
  data.addColumn('number', 'X');
  data.addColumn('number', 'Función coseno hiperbólico');
  
  var Coshdata = [];

  for (var x =-3; x <=3; x+=0.1) {
    Coshdata.push([x,coshi(x)]);
  }
  console.log(Coshdata);
  data.addRows(Coshdata);
  /* datapoint.addRows(point); */
  /* data.addRows(point); */
  var options = {
    title: 'Función coseno hiperbólico',
    hAxis: {
      title: 'X'
    },
    vAxis: {
      title: 'Y'
    },
    backgroundColor: '#ffff',
  };

  var chart5 = new google.visualization.LineChart(document.getElementById('chart_div5'));
  chart5.draw(data, options); 
}
function graficarCosh() {
  drawCosh(); 
}





