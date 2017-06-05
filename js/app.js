$(document).ready(function(){
  $("#calcular").click(function () {

    var salarioMensual = "";
    
    if $("#salarioMensual").val() == null
         salarioMensual = 11186;
    
    var salarioPorDia = salarioMensual / 22;
    
  $("#salarioDias").val(salarioPorDia);
}) 
});


    var empleados = "";
    var horasPromedio = 1.4;
