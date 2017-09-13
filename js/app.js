
$(document).ready(function () {

    document.getElementById("numero").onblur = function ()
    {    

    //number-format the user input
    this.value = parseFloat(this.value.replace(/,/g, ""))
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

     //set the numeric value to a number input
    document.getElementById("salarioMensual").value = this.value.replace(/,/g, "")

    }

    $("#calcular").click(function () {



        var empleados = $("#empleados").val();
        var horasPromedio = 1.4;
        var salarioMensual = "";

        if ($("#salarioMensual").val() == "") {
            salarioMensual = 11282;
        } else {
            salarioMensual = $("#salarioMensual").val();
        }

        var salarioPorDia = salarioMensual / 22;
        var salarioPorHora = salarioPorDia / 8;
        var horaDesperdiciada = $("#empleados").val() * horasPromedio;
        var costoDiario = (horasPromedio * salarioPorHora) * empleados;
        var costoMensual = costoDiario * 22;
        var costoAnual = costoMensual * 12;

        //        var TipCambio = 17.50;

        var sb10Txt = "10";
        var sb10Precio = 5788.40;

        var sb25Txt = "25";
        var sb25Precio = 6136.40;

        var sb50Txt = "50";
        var sb50Precio = 6368.40;

        var sb75Txt = "75";
        var sb75Precio = 7296.40;

        var sb100Txt = "100";
        var sb100Precio = 8108.40;

        var NA = "N/A"


        if ($("#empleados").val() >= 1 & $("#empleados").val() <= 10) {
            $("#solucion").html(sb10Txt);
            $("#inversion").html("$ " + Number(sb10Precio).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");

            var roi = sb10Precio / costoDiario;
            $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
            var benAnual = costoAnual - sb10Precio;
            $("#benAnual").html("$ " + Number(benAnual).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");
        } else {
            if ($("#empleados").val() >= 11 & $("#empleados").val() <= 25) {
                $("#solucion").html(sb25Txt);
                $("#inversion").html("$ " + Number(sb25Precio).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");

                var roi = sb25Precio / costoDiario;
                $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                var benAnual = costoAnual - sb25Precio;
                $("#benAnual").html("$ " + Number(benAnual).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");
            } else {

                if ($("#empleados").val() >= 26 & $("#empleados").val() <= 50) {
                    $("#solucion").html(sb50Txt);
                    $("#inversion").html("$" + Number(sb50Precio).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");

                    var roi = sb50Precio / costoDiario;
                    $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                    var benAnual = costoAnual - sb50Precio;
                    $("#benAnual").html("$ " + Number(benAnual).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");
                } else {
                    if ($("#empleados").val() >= 51 & $("#empleados").val() <= 75) {
                        $("#solucion").html(sb75Txt);
                        $("#inversion").html("$ " + Number(sb75Precio).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");

                        var roi = sb75Precio / costoDiario;
                        $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        var benAnual = costoAnual - sb75Precio;
                        $("#benAnual").html("$ " + Number(benAnual).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");
                    } else {
                        if ($("#empleados").val() >= 76 & $("#empleados").val() <= 100) {
                            $("#solucion").html(sb100Txt);
                            $("#inversion").html("$ " + Number(sb100Precio).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");

                            var roi = sb100Precio / costoDiario;
                            $("#roi").html(Number(roi).toFixed(1).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            var benAnual = costoAnual - sb100Precio;
                            $("#benAnual").html("$ " + Number(benAnual).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");
                        } else {
                            if ($("#empleados").val() == 0 || $("#empleados").val() >= 101) {
                                $("#solucion").html(NA);
                            }
                        }
                    }
                }
            }
        }

        $("#salarioDias").html("$ " + Number(salarioPorDia).toFixed(2));
        $("#salarioHoras").html("$ " + Number(salarioPorHora).toFixed(2));
        $("#horasDesperdiciadas").html(Number(horaDesperdiciada).toFixed(0));
        $("#costoDiario").html("$ " + Number(costoDiario).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#costoMensual").html("$ " + Number(costoMensual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
        $("#costoAnual").html("$ " + Number(costoAnual).toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")).append(" MXN");

    })
});

