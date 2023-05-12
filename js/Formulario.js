function borrar_formulario() {
    document.getElementById("form1").reset();
    alert("se han borrado los datos del formulario corectamente");
}

function enviar_Formulario() {
    document.getElementById("form1").addEventListener("submit", function (event) {
        event.preventDefault();
        if (confirm("¿Está seguro de que desea enviar el formulario?")) {
            alert("El formulario ha sido enviado.");
            // Crear tabla y cabecera
            var table = document.createElement("table");
            var thead = document.createElement("thead");
            table.appendChild(thead);
            var tr = document.createElement("tr");
            thead.appendChild(tr);
            var headers = ["Campo", "Valor"];
            headers.forEach(function (headerText) {
                var th = document.createElement("th");
                var textNode = document.createTextNode(headerText);
                th.appendChild(textNode);
                tr.appendChild(th);
            });

            // Crear cuerpo de la tabla
            var tbody = document.createElement("tbody");
            table.appendChild(tbody);
            var fields = {
                "Fecha": document.getElementById("fecha").value,
                "Tutor empresarial": document.getElementById("tutorEmpresarial").value,
                "Tutor específico": document.getElementById("tutorEspecifico").value,
                "Nombre del estudiante": document.getElementById("nombreEstudiante").value,
                "Empresa": document.getElementById("empresa").value,
                "Periodo": document.getElementById("periodo").value,
                "Asunto": document.getElementById("asunto").value,
                "Diálogo tutor": document.querySelector('input[name="dialogoTutor"]:checked').value,
                "Diálogo estudiante": document.querySelector('input[name="dialogoEstudiante"]:checked').value,
                "Observaciones 1": document.getElementById("observacion1").value,
                "Observaciones 2": document.getElementById("observacion2").value,
            };
            Object.keys(fields).forEach(function (key) {
                var tr = document.createElement("tr");
                tbody.appendChild(tr);
                var td1 = document.createElement("td");
                td1.appendChild(document.createTextNode(key));
                tr.appendChild(td1);
                var td2 = document.createElement("td");
                td2.appendChild(document.createTextNode(fields[key]));
                tr.appendChild(td2);
                td1.style.border = "1px solid black";
                td2.style.border = "1px solid black";

            });

            // Agregar tabla al cuerpo del documento
            var body = document.getElementsByTagName("body")[0];
            body.appendChild(table);

        }
    });
}