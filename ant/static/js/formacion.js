$('#materias').on('change', function() {
  	var nombre = $(this).find(":selected").text();
  	$.get("/formacion/resultados",{ materia: nombre }, function(data, status){

  		$('#nombremateria').text(nombre) //.substring(5)

  		var ras = jQuery.parseJSON(data)
  		$('#left').empty();
  		$('#right').empty();

  		ras.map(function(elemento){ 
  			let rowe = $("<div></div>")
        rowe.addClass("row")

		    let rae = $("<div></div>").text("Student Outcome - "+elemento["RA"]);
		    rae.addClass("col-md-10 offset-md-1 col-10 offset-1 p-2 mt-2 shadow rounded headerso")
		    rowe.append(rae)
		    
		    let texte = $("<div></div>").text(elemento["Inglés"].split('comma').join(','));
		    texte.addClass("col-md-10 offset-md-1 col-10 offset-1 p-2 mt-1 mb-2 shadow so")
		    rowe.append(texte)

		    $('#left').append(rowe)
		 
  			let rows = $("<div></div>")
        rows.addClass("row")

		    let ras = $("<div></div>").text("Resultado de Aprendizaje - "+elemento["RA"]);
		    ras.addClass("col-md-10 offset-md-1 col-10 offset-1 p-2 mt-2 shadow rounded headerso-e")
		    rows.append(ras)
		    
		    let texts = $("<div></div>").text(elemento["Español"].split('comma').join(','));
		    texts.addClass("col-md-10 offset-md-1 col-10 offset-1 p-2 mt-1 mb-2 shadow so-e")
		    rows.append(texts)
		    

		    $('#right').append(rows)
		});

  	});
  });

$(document).ready(function(){
  
  $.get("/formacion/materias", function(data, status){
   	var $select = $('#materias');
   	$select.find('option').remove();
   	var materias = jQuery.parseJSON(data)
   	$.each(materias, function(key, value) {  
   		let selected = (key == 0)?' selected="selected" ':' '
   	   if(value.length > 0) {
   	   	$select.append('<option value=' + key + ' ' +selected+ '>' + value + '</option>');    	
   	   }          
    });

   	$('#materias').change()

  });




});