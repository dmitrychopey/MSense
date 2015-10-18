
      // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      // google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.

      var dataObj;

      function handleFileSelect(evt) {

      	var file = evt.target.files[0];
      	Papa.parse(file, {
      		header: false,
      		skipEmptyLines: true,
      		dynamicTyping: true,
      		complete: function(results) {
      			dataObj = results;
      		}
      	});

      }

      function drawChart(dataArray) {	


      	var data = google.visualization.arrayToDataTable(dataArray);

      	var options = {
      		title: 'Population vs. Profit comparison',
      		hAxis: {title: 'Population', minValue: 0, maxValue: 25},
      		vAxis: {title: 'Profit', minValue: 0, maxValue: 25},
      		legend: 'none',
      		crosshair: { trigger: 'both' }, 
      		chartArea : { left: 40, top:50 }
      	};

      	var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

      	chart.draw(data, options);

      }


      function calculate(){

      	var costF;

      	var X = [];
      	var Y = [];


      	var dataArray = dataObj.data;



   // dataObj.data.sort(compareFirstColumn);

  // function logArrayElements(element, index, array) {
  // console.log('a[' + index + '] = ' + element);
  //  }

// // Обратите внимание на пропуск по индексу 2, там нет элемента, поэтому он не посещается
dataObj.data.forEach(function(element){
	X.push(element[0]);
	Y.push(element[1]);
});



drawChart(dataArray);


}


$(document).ready(function(){
	$("#csv-file").change(handleFileSelect);

	$("#btn-calculate").click(calculate);
});



