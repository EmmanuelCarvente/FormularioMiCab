
let alerta;
let formArray = document.forms['formulario'];
let starting = document.getElementById("starting");
let perMinute = document.getElementById("per-minute");
let distance = document.getElementById("distance");
let startingNow = document.getElementById("starting-now");
let startingReservation = document.getElementById("starting-reservation");
let firstDistanceTo = document.getElementById('fisrt-distance-to');
let firstDistanceFrom = document.getElementById('firts-distance-from');
let firstDistanceFee = document.getElementById('first-distance-fee');
let secondDistanceFrom = document.getElementById('second-distance-from');
let secondDistanceTo = document.getElementById('second-distance-to');
let secondDistanceFee = document.getElementById('second-distance-fee');


    formArray.addEventListener('submit', evento => {
        evento.preventDefault();    

        // VERIFICAMOS QUE TODOS LOS CAMPOS SE HAYAN LLENADO
        for(let elementos of formArray){
                if(elementos.type == "number" ){
                    if(elementos.value != ''){
                        elementos.style.backgroundColor = '#FFFFFF'
                    }
                    else{
                        elementos.style.backgroundColor = '#A90000DD';
                        alerta = 1;
                    } 
                }
                if(elementos == starting){
                    break;
                }
        }
            if(starting.checked){
                if(startingNow.value == '' || startingReservation.value == ''){
                    formArray.elements[i].style.backgroundColor = "#A90000DD";
                    alerta = 1;
               }
            }
            else if(perMinute.checked){
                if(perMinute.value == ''){
                    formArray.elements[i++].style.backgroundColor = "#A90000DD";
                    alerta = 1;
                }
            }
            else if(distance.checked){
                if(formArray.elements[i].value == ''){
                    formArray.elements[i].style.backgroundColor = "#A90000DD";
                    alerta = 1;
                }else{
                    if(firstDistanceFee.value > secondDistanceFee.value){
                        console.log(firstDistanceFee.value);
                        alert("Second Distance Fee tiene que ser mayor a First Distance Fee");
                    }
                }
            }
        

        if(alerta == 1){
            alert("Favor de llenar los campos en Rojo");
            alerta = 0;
        }   
    });


