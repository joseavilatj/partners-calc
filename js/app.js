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
        var horaDesperdiciada = $("#empleados").val() * horasPromedio;
        var costoDiario = (horasPromedio * salarioPorHora) * empleados;
        var costoMensual = costoDiario * 22;
        var costoAnual = costoMensual * 12;

        var TipCambio = 17.50;

        var sb25Txt = "25 Usuarios Concurrentes";
        var sb25Precio = TipCambio * 680;

        var sb50Txt = "50 Usuarios Concurrentes";
        var sb50Precio = TipCambio * 970;

        var sb75Txt = "75 Usuarios Concurrentes";
        var sb75Precio = TipCambio * 1231;

        var sb100Txt = "100 Usuarios Concurrentes";
        var sb100Precio = TipCambio * 1432;

        var NA = "N/A"

        if ($("#empleados").val() >= 1 & $("#empleados").val() <= 25) {
            $("#solucion").html(sb25Txt);
            $("#inversion").html("$" + Number(sb25Precio).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");

            var roi = sb25Precio / costoDiario;
            $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Días");
            var benAnual = costoAnual - sb25Precio;
            $("#benAnual").html("$" + Number(benAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");
        } else {

            if ($("#empleados").val() >= 26 & $("#empleados").val() <= 50) {
                $("#solucion").html(sb50Txt);
                $("#inversion").html("$" + Number(sb50Precio).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");

                var roi = sb50Precio / costoDiario;
                $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Días");
                var benAnual = costoAnual - sb50Precio;
                $("#benAnual").html("$" + Number(benAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");
            } else {
                if ($("#empleados").val() >= 51 & $("#empleados").val() <= 75) {
                    $("#solucion").html(sb75Txt);
                    $("#inversion").html("$" + Number(sb75Precio).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");

                    var roi = sb75Precio / costoDiario;
                    $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Días");
                    var benAnual = costoAnual - sb75Precio;
                    $("#benAnual").html("$" + Number(benAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");
                } else {
                    if ($("#empleados").val() >= 76 & $("#empleados").val() <= 100) {
                        $("#solucion").html(sb100Txt);
                        $("#inversion").html("$" + Number(sb100Precio).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");

                        var roi = sb100Precio / costoDiario;
                        $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Días");
                        var benAnual = costoAnual - sb100Precio;
                        $("#benAnual").html("$" + Number(benAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" Pesos");
                    } else {
                        if ($("#empleados").val() == 0 || $("#empleados").val() >= 101) {
                            $("#solucion").html(NA);
                        }
                    }
                }
            }
        }



        $("#salarioDias").html("$" + Number(salarioPorDia).toFixed(2));
        $("#salarioHoras").html("$" + Number(salarioPorHora).toFixed(2));
        $("#horasDesperdiciadas").html(Number(horaDesperdiciada).toFixed(0));
        $("#costoDiario").html("$" + Number(costoDiario).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#costoMensual").html("$" + Number(costoMensual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#costoAnual").html("$" + Number(costoAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));

    })
});
    
    
