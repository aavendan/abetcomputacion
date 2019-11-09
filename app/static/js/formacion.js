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
                    // console.log('Success:', response)

                    $('#ras_en').empty()
                    $('#ras_sp').empty()

                    template = `
                         <div class="alert alert-success" role="alert">
                          %text%
                        </div>
                      `

                    response.forEach((item) => {
                        if (item.en.length > 4) {
                            $('#ras_en').append(template.replace('%text%', item.en))
                        }
                        if (item.sp.length > 4) {
                            $('#ras_sp').append(template.replace('%text%', item.sp))
                        }
                    })

                    if ($('#ras_en').children().length > 0) {
                        $('#hasEn').show()
                    } else {
                        $('#hasEn').hide()
                    }

                    if ($('#ras_sp').children().length > 0) {
                        $('#hasSp').show()
                    } else {
                        $('#hasSp').hide()
                    }

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
                    // console.log('Success:', response)

                    $('#rec_form').empty()
                    $('#rec_at').empty()
                    $('#improvement').empty()

                    template = `
                         <div class="alert %alert_type%" role="alert">
                          %text%
                        </div>
                      `

                    response.forEach((item) => {

                        if (item.formation.length > 4) {
                            let formation = item.formation;
                            let formations = formation.split("\n").filter(function(el) {
                                return el.length > 0;
                            });

                            formations.forEach((formation) => {
                                $('#rec_form').append(template
                                    .replace('%text%', formation)
                                    .replace('%alert_type%"', 'alert-info'))
                            })
                        }
                        if (item.assessment.length > 4) {
                            let assessment = item.assessment;
                            let assessments = assessment.split("\n").filter(function(el) {
                                return el.length > 0;
                            });

                            assessments.forEach((assessment) => {
                                $('#rec_at').append(template
                                    .replace('%text%', assessment)
                                    .replace('%alert_type%"', 'alert-info'))
                            })


                        }
                        if (item.improvement.length > 4) {

                             console.log(item.improvement)

                            let improvement = item.improvement;
                            let improvements = improvement.split("\n").filter(function(el) {
                                return el.length > 0;
                            });

                            improvements.forEach((improvement) => {
                                $('#rec_imp').append(template
                                    .replace('%text%', improvement)
                                    .replace('%alert_type%"', 'alert-warning'))
                            })
                            /*$('#improvement').append(template.replace('%text%', item.improvement).replace('%alert_type%"', 'alert-warning'))*/
                        }
                    })


                    if ($('#rec_form').children().length > 0) {
                        $('#hasFormation').show()
                    } else {
                        $('#hasFormation').hide()
                    }

                    if ($('#rec_at').children().length > 0) {
                        $('#hasAssessment').show()
                    } else {
                        $('#hasAssessment').hide()
                    }

                    if ($('#improvement').children().length > 0) {
                        $('#hasImprovement').show()
                    } else {
                        $('#hasImprovement').hide()
                    }



                })
            //

        }


    })

    $('#subjects option[value="1"]').attr("selected", true);
    $("#subjects").trigger("change");

});