'use strict';
const app = {

    estudiantes: new Array(),

    init: function (){
        app.setup();
    },

    setup: function () {
        $('#addStudent').click(app.desplega);
        $('#sendss').click(app.addForm);
        $('#print').click(app.print_All);
        $('#delete').click(app.filtromin);
        $('#filmax').click(app.filtromax);
    },

    desplega: function (){
        $('#estudiante').show();
        $('#sendss').click(function(){
            $('#estudiante').hide();
        });
    },

    addForm: function (){
        let data = {};
        let name = $('#idname').val();
        let grade_tec = parseInt($('#idtec').val());
        let grade_hse = parseInt($('#idhse').val());

        data.suName= name;
        data.suTec = grade_tec;
        data.suHse =  grade_hse;

        app.estudiantes.push(data);
        console.log(app.estudiantes);

        alert('La estudiante '+ data.suName + ' se ha agregado correctamente');
        $('#consol').empty();
        $("#consol").append("Nombre: " + data.suName +'<br>'+ 'Puntaje TEC: '+data.suTec + "<br>"+'Puntaje HSE: '+data.suHse+'<br>'+'<br>');

        $("#idname").val('');
        $("#idtec").val('');
        $("#idhse").val('');

    },

    print_All: function (){
        $.grep(app.estudiantes, function(value, index){
            $('#consol').empty();
            $("#records").append("Nombre: " + app.estudiantes[index].suName +'<br>'+ 'Puntaje TEC: '+app.estudiantes[index].suTec + "<br>"+'Puntaje HSE: '+app.estudiantes[index].suHse+'<br>'+'<br>');
            }); 
    }
}

$(document).ready(app.init);
