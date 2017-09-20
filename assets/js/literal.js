'use strict';
const app = {
    setup: {
        estudiantes: undefined,
    },

    init: function () {
        app.setup.estudiantes = [];
        app.mostrar();
        app.data_form();
        app.mergeHTML();
        app.printHTML();
        app.listar();
        app.print_All();
        app.filtromax();
        app.data_form.prototype.toHTML = function () {
            let html = '';
            html += 'Nombre: ' + this.name + '<br>';
            html += 'Puntaje TEC: ' + this.grade_TEC + '<br>';
            html += 'Puntaje HSE: ' + this.grade_HSE + '<br>';
            html += 'Status: Active ' + '<br>';
            html += '<br><br>';
            return html;
        };
    },

    mostrar: function () {
        $("#estudiante").show();
        $("#send").on('click', function () {
            $("#estudiante").hide();
        });
    },

    data_form: function (name, grade_TEC, grade_HSE) {
        this.name = name;
        this.grade_TEC = grade_TEC;
        this.grade_HSE = grade_HSE;
    },

    mergeHTML: function () {
        let html = '';
        for (let i in app.setup.estudiantes) {
            html += app.setup.estudiantes[i].toHTML();
        }
        return html;
    },

    printHTML: function (html) {
        document.getElementById('records').innerHTML = '';
        document.getElementById('records').innerHTML = html;
    },

    listar: function () {
        let name = document.getElementById('idname').value;
        let hse = parseInt(document.getElementById('idtec').value);
        let tec = parseInt(document.getElementById('idhse').value);
        let register_alumni = new data_form(name, tec, hse);
        app.setup.estudiantes.push(register_alumni);
        printHTML(register_alumni.toHTML());
    },

    print_All: function () {
        app.printHTML(app.mergeHTML());
    },

    filtromin: function () {
        let consulta1 = estudiantes.filter(function (data) {
                let promediomin = (data.grade_TEC + data.grade_HSE) / 2;
                return promediomin >= 70;
            });
        consulta1.forEach(function (valor, indice, array) {
            app.printHTML(consulta1[indice]);
        });
    },

    filtromax: function () {
        let consulta2 = estudiantes.filter(function (data) {
            let promediomax = (data.grade_TEC + data.grade_HSE) / 2;
            return promediomax >= 70;
        });
        //console.log(consulta2);
    }

}

app.init();
