let input7 = document.getElementById("input7")
let input8 = document.getElementById("input8")

let Time1 =document.getElementById("Time1")
let Time2 =document.getElementById("Time2")

input7.addEventListener("change", myresult4)
input7.addEventListener("keyup", myresult4)
Time1.addEventListener("change", myresult4)
Time2.addEventListener("change", myresult4)


function myresult4(){
    if(Time1.value === Time2.value){
        input8.value = input7.value
    }
    if(Time1.value ==="Second"){
        if(Time2.value ==="Milisecond"){
            input8.value = input7.value*1000
        }
        else  if(Time2.value ==="Microsecond"){
            input8.value = input7.value*1000000
        }else  if(Time2.value ==="Nanosecond"){
            input8.value = input7.value*1000000000
        }else  if(Time2.value ==="Picosecond"){
            input8.value = input7.value*1000000000000
        }else  if(Time2.value ==="Minute"){
            input8.value = input7.value*0.0166666667
        }else  if(Time2.value ==="Hour"){
            input8.value = input7.value*0.0002777778
        }else  if(Time2.value ==="Day"){
            input8.value = input7.value*0.0000115741
        }else  if(Time2.value ==="Week"){
        input8.value = input7.value*0.0000016534
        }else  if(Time2.value ==="Months"){
        input8.value = input7.value*3.802570537E-7
        }else  if(Time2.value ==="Year"){
        input8.value = input7.value*3.168808781E-8
        }
}

// --------------------------------------------

if(Time1.value ==="Milisecond"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*0.001
    }
    else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*1000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*1000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*1000000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*0.0000166667
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*2.777777777E-7
    }else  if(Time2.value ==="Day"){
        input8.value = input7.value*1.157407407E-8
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*1.653439153E-9
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*3.802570537E-10
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*3.168808781E-11
    }
}

// --------------------------------------------

if(Time1.value ==="Microsecond"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*0.000001
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*0.001
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*1000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*1000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*1.666666666E-8
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*2.777777777E-10
    }else  if(Time2.value ==="Day"){
        input8.value = input7.value*1.157407407E-11
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*1.653439153E-12
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*3.802570537E-13
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*3.168808781E-14
    }
}

// --------------------------------------------

if(Time1.value ==="Nanosecond"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*1.E-9
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*0.000001
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*0.001
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*1000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*1.666666666E-11
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*2.777777777E-13
    }else  if(Time2.value ==="Day"){
        input8.value = input7.value*1.157407407E-14
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*1.653439153E-15
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*3.802570537E-16
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*3.168808781E-17
    }
}

// --------------------------------------------

if(Time1.value ==="Picosecond"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*1.E-12
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*1.E-9
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*0.000001
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*0.001
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*1.666666666E-14
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*2.777777777E-16
    }else  if(Time2.value ==="Day"){
        input8.value = input7.value*1.157407407E-17
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*1.653439153E-18
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*3.802570537E-19
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*3.168808781E-20
    }
}

// --------------------------------------------

if(Time1.value ==="Minute"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*60
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*60000
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*60000000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*60000000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*60000000000000
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*0.0166666667
    }else  if(Time2.value ==="Day"){
        input8.value = input7.value*0.0006944444
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*0.0000992063
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*0.0000228154
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*0.0000019013
    }
}

// --------------------------------------------

if(Time1.value ==="Hour"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*3600
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*3600000
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*3600000000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*3600000000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*3600000000000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*60
    }else  if(Time2.value ==="Day"){
        input8.value = input7.value*0.0416666667
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*0.005952381
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*0.0013689254
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*0.0001140771
    }
}

// --------------------------------------------

if(Time1.value ==="Day"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*86400
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*86400000
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*86400000000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*86400000000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*86400000000000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*1440
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*24
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*0.1428571429
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*0.0328542094
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*0.0027378508
    }
}

// --------------------------------------------

if(Time1.value ==="Week"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*604800
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*604800000
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*604800000000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*604800000000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*604800000000000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*10080
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*168
    }else  if(Time2.value ==="Day"){
    input8.value = input7.value*7
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*0.2299794661
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*0.0191649555
    }
}

// --------------------------------------------

if(Time1.value ==="Months"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*2629800
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*2629800000
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*2629800000000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*2629800000000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*2629800000000000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*43830
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*730.5
    }else  if(Time2.value ==="Day"){
    input8.value = input7.value*30.4375
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*4.3482142857
    }else  if(Time2.value ==="Year"){
    input8.value = input7.value*0.0833333333
    }
}

// --------------------------------------------

if(Time1.value ==="Year"){
    if(Time2.value ==="Second"){
        input8.value = input7.value*31557600
    }
    else  if(Time2.value ==="Milisecond"){
        input8.value = input7.value*31557600000
    }else  if(Time2.value ==="Microsecond"){
        input8.value = input7.value*31557600000000
    }else  if(Time2.value ==="Nanosecond"){
        input8.value = input7.value*31557600000000000
    }else  if(Time2.value ==="Picosecond"){
        input8.value = input7.value*31557600000000000000
    }else  if(Time2.value ==="Minute"){
        input8.value = input7.value*525960
    }else  if(Time2.value ==="Hour"){
        input8.value = input7.value*8766
    }else  if(Time2.value ==="Day"){
    input8.value = input7.value*365.25
    }else  if(Time2.value ==="Week"){
    input8.value = input7.value*52.178571429
    }else  if(Time2.value ==="Months"){
    input8.value = input7.value*12
    }
}
}