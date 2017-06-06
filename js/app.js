$(document).ready(function () {

    $("#calcular").click(function () {

        var empleados = $("#empleados").val();
        var horasPromedio = 1.4;
        var salarioMensual = "";

        if ($("#salarioMensual").val() == "") {
            salarioMensual = 11186;
        } else {
            salarioMensual = $("#salarioMensual").val();
        }

        var salarioPorDia = salarioMensual / 22;
        var salarioPorHora = salarioPorDia / 8;
        var horaDesperdiciada = salarioPorHora;
        var costoDiario = (horasPromedio * salarioPorHora) * empleados;
        var costoMensual = costoDiario * 22;
        var costoAnual = costoMensual * 12;

        $("#salarioDias").html(Number(salarioPorDia).toFixed(2));
        $("#salarioHoras").html(Number(salarioPorHora).toFixed(2));
        $("#horasDesperdiciadas").html(Number(horaDesperdiciada).toFixed(2));
        $("#costoDiario").html(Number(costoDiario).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#costoMensual").html(Number(costoMensual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#costoAnual").html(Number(costoAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    })
});


    
    
