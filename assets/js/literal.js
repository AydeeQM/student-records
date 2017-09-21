'use strict';
const app = {
    estudiantes: [],

    init: function (){
        $('#addStudent').click(function(){
            $("#estudiante").show();
            $("#send").on('click', function () {
                $("#estudiante").hide();
            });
        });

        $('#send').click(app.addForm);
        $('#print').click(app.print_All);
    },

    addForm: function (){
        let data = {};
        let name = $('#idname').val();
        let grade_tec = parseInt($('#idtec').val());
        let grade_hse= parseInt($('#idhse').val());

        data.suName= name;
        data.suTec = grade_tec;
        data.suHse =  grade_hse;

        app.estudiantes.push(data);

        alert('El estudiante ' + ' ' + data.suName+ ' se ha agregado correctamente');
        
        $("#nombre").val('');
        $("#apell").val('');
        $("#eldni").val('');
    },

    print_All: function (){
        $.grep(app.estudiantes, function(value, index){
            $("#records").append("Nombre: " + app.setup.estudiantes[index].suName +'<br>'+ 'Puntaje TEC: '+app.setup.estudiantes[index].suTec + "<br>"+'Puntaje HSE: '+app.setup.estudiantes[index].suHse+'<br>'+'<br>');
            }); 
    }
    

}

app.init();
