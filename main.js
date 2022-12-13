//función para iniciar la ejecución del bloque de código JS después de que se haya renderizado el html.
$(document).ready(function(){
    
    
    //Función que al pulsar el botón iniciar:
    $("#iniciar").click(function(){
        let nParticipantes=$("#participantes").val() //definimos el valor de cada coche
        $("#iniciar").hide(); //oculte el propio botón
            $("#reiniciar").show(); // Muestre el botón reiniciar
            $("#desplegable").hide(); //Oculte el desplegable
            for (i=1; i <= nParticipantes; i++){ //Creamos un bucle para poder mover cada imagen y darle una velocidad por separado.
                $("#imgCoches" + i).animate({"left":"90%"}, Math.random(1 , 11) * (500 - 1000) + 1000);//cogemos cada imgCoche, la animamos y con la función de JS Math.random 
                                                                                               //damos valores aleatorios dentro de un rango de mínimo y máximo.
            }

    })
    $("#reiniciar").click(function(){ //función que:
            location.reload(); //refresca la página    
    })
    
    $("#participantes").click(function(){
        $("#circuito").show(); //Muestra el div circuito
        let participantes = []; //crea un array vacío
        
        let nParticipantes=$("#participantes").val()//recoge el valor del elemento participantes, por su valor sabemos el nº de participantes.
        
        for (i=1; i <= nParticipantes; i++){//rellenamos el array con el nº recogido del elemento desplegable participantes.
            $("#circuito").append("<div class='carril'><img class='imgCoches' id='imgCoches" + i + "' src='img/car" + i +  ".png'></div>");
        }
        $("#desplegable").hide();
        $("#reiniciar").show();
    });
    $("#carril").css("margin-left", "0"); 
        
    
    
});