function borrar_formulario() {
    document.getElementById("form1").reset();
    alert("se han borrado los datos del formulario corectamente");
}
function enviar_Formulario() {
    document.getElementById("form1").addEventListener("submit", function (event) {
        event.preventDefault();

        var fecha = document.getElementById("fecha").value;
        var nombret = document.getElementById("tutorE").value;
        var tutoresp = document.getElementById("tutorEs").value;
        var estudiante = document.getElementById("estudiante").value;
        var empresa = document.getElementById("empresa").value;
        var periodo = document.getElementById("periodo").value;
        var asunto = document.getElementById("asunto").value;
        var huboDialogo = document.querySelector('input[name="dialogoTutor"]:checked');
        var huboDialogo2 = document.querySelector('input[name="dialogoEstudiante"]:checked');
        var observaciones = document.getElementById("observaciones").value;


        if (!fecha || !nombret || !tutoresp || !estudiante || !empresa || !periodo || !asunto || !huboDialogo || !huboDialogo2 || !observaciones) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        var mensaje = "Los datos que se enviarán son:\nFecha: " + fecha +
            "\nNombre: " + nombret +
            "\nTutor empresarial: " + tutoresp +
            "\nEstudiante: " + estudiante +
            "\nEmpresa: " + empresa +
            "\nPeriodo: " + periodo +
            "\nAsunto: " + asunto +
            "\nHubo diálogo con los tutores empresariales: " + huboDialogo.value +
            "\nHubo diálogo con los tutores empresariales: " + huboDialogo2.value +
            "\nobservaciones: " + observaciones;
            
        if (confirm("¿Está seguro de que desea enviar el formulario?\n\n" + mensaje)) {
            alert("El formulario ha sido enviado.");
        } else {
            alert("El formulario no ha sido enviado.");
        }
    });
}
