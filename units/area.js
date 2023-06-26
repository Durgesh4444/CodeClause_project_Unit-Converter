// for Area Converter

let input5 = document.getElementById("input5")
let input6 = document.getElementById("input6")

let Area1 =document.getElementById("Area1")
let Area2 =document.getElementById("Area2")

input5.addEventListener("change", myresult3)
input5.addEventListener("keyup", myresult3)
Area1.addEventListener("change", myresult3)
Area2.addEventListener("change", myresult3)


function myresult3(){
 if(Area1.value === Area2.value){
  input6.value = input5.value
 }
 if(Area1.value ==="Square Meter"){
  if(Area2.value ==="Square Km"){
    input6.value =input5.value*0.000001
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*10000
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*1000000
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*1000000000000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*0.0001
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*3.861018768E-7
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*1.1959900463
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*10.763910417
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*1550.0031
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*0.0002471054
  }
 }
// ----------------------------------------------------------

 if(Area1.value ==="Square Km"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*1000000
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*10000000000
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*1000000000000
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*1000000000000000000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*100
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*0.3861018768
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*1195990.0463
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*10763910.417
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*1550003100
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*247.10538147
  }
 }

//  ------------------------------------------------------------

if(Area1.value ==="Square Cm"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*0.0001
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*1.E-10
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*100
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*100000000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*1.E-8
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*3.861018768E-11
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*0.000119599
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*0.001076391
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*0.15500031
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*2.471053814E-8
  }
 }

//  ---------------------------------------------------------
if(Area1.value ==="Square Mm"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*0.000001
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*1.E-12
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*0.01
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*1000000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*9.999999999E-11
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*3.861018768E-13
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*0.000001196
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*0.0000107639
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*0.0015500031
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*2.471053814E-10
  }
 }

//  ---------------------------------------------------------------

if(Area1.value ==="Square Mcm"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*1.E-12
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*1.E-18
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*9.999999999E-9
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*0.000001
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*1.E-16
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*3.861018768E-19
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*1.195990046E-12
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*1.076391041E-11
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*1.5500031E-9
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*2.471053814E-16
  }
 }

//  ------------------------------------------------------------------------

if(Area1.value ==="Hectare"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*10000
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*0.01
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*100000000
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*10000000000
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*10000000000000000
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*0.0038610188
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*11959.900463
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*107639.10417
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*15500031
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*2.4710538147
  }
 }

 //  ------------------------------------------------------------------------

if(Area1.value ==="Square Mile"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*2589990
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*2.58999
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*25899900000
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*2589990000000
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*2589990000000000000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*258.999
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*3097602.26
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*27878420.34
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*4014492529
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*640.00046695
  }
 }

 //  ------------------------------------------------------------------------

if(Area1.value ==="Square Yard"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*0.83612736
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*8.3612736E-7
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*8361.2736
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*836127.36
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*836127360000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*0.0000836127
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*3.228303429E-7
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*9
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*1296
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*0.0002066116
  }
 }

  //  ------------------------------------------------------------------------

if(Area1.value ==="Square Foot"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*0.09290304
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*9.290304E-8
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*929.0304
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*92903.04
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*92903040000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*0.0000092903
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*3.58700381E-8
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*0.1111111111
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*144
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*0.0000229568
  }
 }

   //  ------------------------------------------------------------------------

if(Area1.value ==="Square Inch"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*0.00064516
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*6.4516E-10
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*6.4516
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*645.16
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*645160000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*6.4516E-8
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*2.490974868E-10
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*0.0007716049
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*0.0069444444
  }
  else if(Area2.value ==="Acre"){
    input6.value =input5.value*1.594225079E-7
  }
 }

    //  ------------------------------------------------------------------------

if(Area1.value ==="Acre"){
  if(Area2.value ==="Square Meter"){
    input6.value =input5.value*4046.8564224
  }
  else if(Area2.value ==="Square Km"){
    input6.value =input5.value*0.0040468564
  }
  else if(Area2.value ==="Square Cm"){
    input6.value =input5.value*40468564.224
  }
  else if(Area2.value ==="Square Mm"){
    input6.value =input5.value*4046856422.4
  }
  else if(Area2.value ==="Square Mcm"){
    input6.value =input5.value*4046856422400000
  }
  else if(Area2.value ==="Hectare"){
    input6.value =input5.value*0.4046856422
  }
  else if(Area2.value ==="Square Mile"){
    input6.value =input5.value*0.0015624989
  }
  else if(Area2.value ==="Square Yard"){
    input6.value =input5.value*4840
  }
  else if(Area2.value ==="Square Foot"){
    input6.value =input5.value*43560
  }
  else if(Area2.value ==="Square Inch"){
    input6.value =input5.value*6272640
  }
 }
}