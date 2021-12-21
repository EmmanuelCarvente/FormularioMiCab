
let alerta;
let formArray = document.forms['formulario'];
let starting = document.getElementById("starting");
let perMinute = document.getElementById("per-minute");
let costPerMinute = document.getElementById("cost-per-minute");
let distance = document.getElementById("distance");
let startingNow = document.getElementById("starting-now");
let startingReservation = document.getElementById("starting-reservation");
let firstDistanceTo = document.getElementById('first-distance-to');
let firstDistanceFrom = document.getElementById('first-distance-from');
let firstDistanceFee = document.getElementById('first-distance-fee');
let secondDistanceFrom = document.getElementById('second-distance-from');
let secondDistanceTo = document.getElementById('second-distance-to');
let secondDistanceFee = document.getElementById('second-distance-fee');


    formArray.addEventListener('submit', evento => {
        evento.preventDefault();    

        // VERIFICAMOS QUE TODOS LOS CAMPOS SE HAYAN LLENADO
        for(let elementos of formArray){
                if(elementos.type == "number" ){
                    if(elementos.value != '' && elementos.value >= 0){
                        elementos.style.backgroundColor = '#FFFFFF'
                    }
                    else{
                        elementos.style.backgroundColor = '#A90000DD';
                        alerta = 1;
                    } 
                }
                if(!starting.checked || !perMinute.checked || !distance.checked){
                    if(elementos == starting){
                        break;
                    }
                }
        }
        
        if(starting.checked){
            if(startingNow.value == '' || startingReservation.value == ''){
                alert("Llene los campos faltantes en Starting")
            }
        }
        if(perMinute.checked){
            if(costPerMinute.value == '' || costPerMinute.value <= 0){
                alert("Llene el campo PerMinute");
            }
        }
        let condicion =0;
        if(distance.checked){
            for(let  i= 23; i< formArray.elements.length -1  ; i++){
                if(formArray.elements[i].value != '' ){
                    console.log(formArray.elements[i]);
                    formArray.elements[i].style.backgroundColor = '#FFFFFF'
                    condicion =1;
                }
                else{
                    formArray.elements[i].style.backgroundColor = '#A90000DD';
                    alerta = 1;
                    condicion = 0;
                }
            }
            console.log(firstDistanceFee.value);
            if(condicion == 1){
                if(firstDistanceFee.value > secondDistanceFee.value){
                    alert("Second Distance Fee tiene que ser mayor o igual a First Distance Fee");
                }else{

                }
                if(firstDistanceFrom.value > secondDistanceFrom.value){
                    alert("Second Distance From tiene que ser mayor o igual a First Distance From");
                }else{

                }
                if(firstDistanceTo.value > secondDistanceTo.value){
                    alert("Second Distance To tiene que ser mayor o igual a First Distance To");
                }else{

                }
        }
        }
        

        if(alerta == 1){
            alert("Favor de llenar los campos en Rojo");
            alerta = 0;
        }   
    });


