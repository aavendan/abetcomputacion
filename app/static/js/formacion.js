$(document).ready(function() {


    $('#subjects').on('change', (value) => {

        var urlRAS = "/formacion/ras";
        var urlRec = "/formacion/recommendations";
        var data = $("#subjects option:selected").val();

        if (data != -1) {

            $("#subjects option[value='-1']").remove();

            //
            fetch(urlRAS, {
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

                        $('#ras_en').append(template.replace('%text%', item.en))
                        $('#ras_sp').append(template.replace('%text%', item.sp))
                    })

                });
            //


            //
            fetch(urlRec, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(parseInt(data)), // data can be `string` or {object}!
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {
                    console.log('Success:', response)

                    $('#rec_form').empty()
                    $('#rec_at').empty()

                    template = `
                 <div class="alert alert-info" role="alert">
                  %text%
                </div>
              `

                    response.forEach((item) => {

                        if (item.formation.length > 4) {
                            $('#rec_form').append(template.replace('%text%', item.formation))
                        }
                        if (item.assessment.length > 4) {
                            $('#rec_at').append(template.replace('%text%', item.assessment))
                        }
                    })


                    if($('#rec_form').children().length > 0) {
                      $('#hasFormation').show()
                    } else {
                      $('#hasFormation').hide()
                    }

                    if($('#rec_at').children().length > 0) {
                      $('#hasAssessment').show()
                    } else {
                      $('#hasAssessment').hide()
                    }



                })
            //

        }


    })

    $('#subjects option[value="1"]').attr("selected", true);
    $("#subjects").trigger("change");

});