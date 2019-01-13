$(document).ready(function(){
  $.get("/formacion/materias", function(data, status){
   	var $select = $('#materias');
   	$select.find('option').remove();
   	var materias = jQuery.parseJSON(data)
   	$.each(materias, function(key, value) {    
   	   if(value.length > 0) {
   	   	$select.append('<option value=' + key + '>' + value + '</option>');    	
   	   }          
       
    });   
  });
});