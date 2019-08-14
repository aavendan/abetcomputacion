$(document).ready(function() {


    $('#subjects').on('change', (value) => {

        var url = "/formacion/ras";
        var data= $( "#subjects option:selected" ).val();

        if(data!=-1) {

          $("#subjects option[value='-1']").remove();

          fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(parseInt(data)), // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => { 
              console.log('Success:', response)

              $('#ras_en').empty()
              $('#ras_sp').empty()

              template = `
                 <div class="alert alert-success" role="alert">
                  %text%
                </div>
              `
              
              response.forEach((item) => {
                $('#ras_en').append(template.replace('%text%',item.en))
                $('#ras_sp').append(template.replace('%text%',item.sp))
              })

            });

        }

        
    })

    // $('#subjects option[value="1"]').attr("selected",true);

});