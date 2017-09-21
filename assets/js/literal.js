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
        $("#consol").append("Nombre: " + data.suName +'<br>'+ 'Puntaje TEC: '+data.suTec + "<br>"+'Puntaje HSE: '+data.suHse+'<br>'+'Status: Active'+'<br>');

        $("#idname").val('');
        $("#idtec").val('');
        $("#idhse").val('');

    },

    print_All: function (){
        $.grep(app.estudiantes, function(value, index){
            $('#consol').empty();
            $("#records").append("Nombre: " + app.estudiantes[index].suName +'<br>'+ 'Puntaje TEC: '+app.estudiantes[index].suTec + "<br>"+'Puntaje HSE: '+app.estudiantes[index].suHse+'<br>'+'Status: Active'+'<br>'+'<br>');
            }); 
    },

    filtromin: function(){
        let consulta1 = app.estudiantes.filter(function (data) {
            let promediomin = (data.suTec + data.suHse) / 2;
            return promediomin >= 70;
        });
        console.log(consulta1);
        $('#records').empty();
        
        let html = '';
        consulta1.forEach(function (valor, indice) {
            html += 'Nombre: '+ valor.suName +'<br>';
            html += 'Nombre: '+ valor.suTec +'<br>';
            html += 'Nombre: '+ valor.suHse +'<br>';
            html += 'Status: Active ' + '<br>';
            html += '<br><br>';
        });
        
        $('#records').append(html);
        
    }
}

$(document).ready(app.init);
