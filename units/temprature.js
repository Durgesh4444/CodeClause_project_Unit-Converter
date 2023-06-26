
// for temprature converter 
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")


let Temprature1 = document.getElementById("Temprature1")
let Temprature2 = document.getElementById("Temprature2")

input3.addEventListener("change", myresult2)
input3.addEventListener("keyup", myresult2)
Temprature1.addEventListener("change", myresult2);
Temprature2.addEventListener("change", myresult2);


function myresult2(){
    if(Temprature1.value === Temprature2.value){
        input4.value = input3.value
    }
    if(Temprature1.value === "Celsius"){
        if(Temprature2.value=== "Kelvin"){
        input4.value = input3.value *274.15
        }
        else if(Temprature2.value=== "Fahrenheit"){
            input4.value = input3.value *33.8
        }
    }
    if(Temprature1.value === "Kelvin"){
        if(Temprature2.value=== "Celsius"){
        input4.value = input3.value *-272.15
        }
        else if(Temprature2.value=== "Fahrenheit"){
            input4.value = input3.value *-457.87
        }
    }
    if(Temprature1.value === "Fahrenheit"){
        if(Temprature2.value=== "Celsius"){
        input4.value = input3.value *-17.222222222
        }
        else if(Temprature2.value=== "Kelvin"){
            input4.value = input3.value *255.92777778
        }
    }
}