function calculateTotal(row) {
    console.log("calculateTotal(" + row + ")");
    var cantidadFacturada = parseFloat(document.getElementById("cantidad-facturada-" + row).value);
    var importeUnitario = parseFloat(document.getElementById("importe-unitario-" + row).value);
    var importeTotal = cantidadFacturada * importeUnitario;
    document.getElementById("importe-total-" + row).textContent = importeTotal.toFixed(2);
}

function calculateAll() {
    var rows = document.getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].getElementsByTagName("td").length > 0) {
            calculateTotal(i + 1);
        }
    }
}