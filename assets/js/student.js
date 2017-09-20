function mostrar() {
    $("#estudiante").show();
    $("#send").on('click', function () {
        $("#estudiante").hide();
    });
}

let estudiantes = [];

function data_form(name, grade_TEC, grade_HSE) {
    this.name = name;
    this.grade_TEC = grade_TEC;
    this.grade_HSE = grade_HSE;
};

data_form.prototype.toHTML = function () {
    let html = '';
    html += 'Nombre: ' + this.name + '<br>';
    html += 'Puntaje TEC: ' + this.grade_TEC + '<br>';
    html += 'Puntaje HSE: ' + this.grade_HSE + '<br>';
    html += 'Status: Active ' + '<br>';
    html += '<br><br>';
    return html;
}

function mergeHTML() {
    let html = '';
    for (let i in estudiantes) {
        html += estudiantes[i].toHTML();
    }
    return html;
}

function printHTML(html) {
    document.getElementById('records').innerHTML = '';
    document.getElementById('records').innerHTML = html;
}

function listar() {
    let name = document.getElementById('idname').value;
    let hse = parseInt(document.getElementById('idtec').value);
    let tec = parseInt(document.getElementById('idhse').value);
    let register_alumni = new data_form(name, tec, hse);
    estudiantes.push(register_alumni);
    printHTML(register_alumni.toHTML());
};

function print_All() {
    printHTML(mergeHTML());
};

function filtromin() {
    let consulta1 = estudiantes.filter(function (data) {
        let promediomin = (data.grade_TEC + data.grade_HSE) / 2;
        return promediomin >= 70;
    });
    //console.log(consulta1);
    let html = '';
    consulta1.forEach(function (valor, indice) {
        html += 'Nombre: '+ valor.name +'<br>';
        html += 'Nombre: '+ valor.grade_TEC +'<br>';
        html += 'Nombre: '+ valor.grade_HSE +'<br>';
        html += 'Status: Active ' + '<br>';
        html += '<br><br>';
    });

    printHTML(html);
}

function filtromax() {
    let consulta2 = estudiantes.filter(function (data) {
        let promediomax = (data.grade_TEC + data.grade_HSE) / 2;
        return promediomax >= 70;
    });
    //console.log(consulta2);
}