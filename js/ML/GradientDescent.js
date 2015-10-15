var data;

function handleFileSelect(evt) {
	
   var file = evt.target.files[0];
   Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        data = results;
      }
    });

  }


  function calculate(){

  	console.log(data);

  }

 
  $(document).ready(function(){
    $("#csv-file").change(handleFileSelect);

    $("#btn-calculate").click(calculate);
  });



   