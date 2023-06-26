let input11 = document.getElementById("input11");
let input12 = document.getElementById("input12");

let Weight1 = document.getElementById("Volume1");
let Weight2 = document.getElementById("Volume2");

input11.addEventListener("change", myresult6);
input11.addEventListener("keyup", myresult6);
Weight1.addEventListener("change", myresult6);
Weight2.addEventListener("change", myresult6);

function myresult6(){
  if (Weight1.value === Weight2.value) {
    input12.value = input11.value;
  }
  if (Weight1.value === "Cubic Meter") {
    if (Weight2.value === "Cubic Kilometer") {
      input12.value = input11.value * 1.E-9
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 1000000;
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value * 1000000000
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 1000
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value * 1000000
    } else if (Weight2.value === "US Gallon") {
        input12.value = input11.value* 264.17217686
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 1056.6887074
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 2113.3774149
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 4226.7548297
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 33814.038638
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 67628.077276
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 202884.23183
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 219.9692483
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 879.8769932
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 1759.7539864
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 35195.079728
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 56312.127565
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 168936.38269
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 2.399128636E-10
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 1.3079506193
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value * 35.314666721
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 61023.744095
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "Cubic Kilometer") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 1000000000
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 1000000000000000;
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value * 1000000000000000000
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 1000000000000
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value * 1000000000000000
    } else if (Weight2.value === "US Gallon") {
        input12.value = input11.value* 264172176858
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 1056688707432
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 2113377414864
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 4226754829728
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 33814038637823
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 67628077275645
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 202884231826936
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 219969248299
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 879876993196
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 1759753986393
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 35195079727854
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 56312127564566
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 168936382693699
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 0.2399128636
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 1307950619.3
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value * 35314666721
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 61023744094732
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "Cubic Centimeter") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.000001
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 9.999999999E-16
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value * 1000
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.001
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value * 1
    } else if (Weight2.value === "US Gallon") {
        input12.value = input11.value* 0.0002641722
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 0.0010566887
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.0021133774
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0042267548
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 0.0338140386
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 0.0676280773
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 0.2028842318
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.0002199692
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.000879877
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.001759754
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 0.0351950797
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 0.0563121276
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 0.1689363827
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 2.399128636E-16
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.000001308
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value * 0.0000353147
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 0.0610237441
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "liter") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.001
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 1.E-12
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 1000
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *1000000
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value * 1000
    } else if (Weight2.value === "US Gallon") {
        input12.value = input11.value* 0.2641721769
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 1.0566887074
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 2.1133774149
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 4.2267548297
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 33.814038638
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 67.628077276
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 202.88423183
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.2199692483
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.8798769932
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 1.7597539864
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *35.195079728
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 56.312127565
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 168.93638269
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 2.399128636E-13
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0013079506
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0353146667
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 61.023744095
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "Mililiter") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.000001
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 9.999999999E-16
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 1
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *1000
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.001
    } else if (Weight2.value === "US Gallon") {
        input12.value = input11.value* 0.0002641722
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 0.0010566887
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.0021133774
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0042267548
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 0.0338140386
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 0.0676280773
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 0.2028842318
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.0002199692
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.000879877
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.001759754
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *0.0351950797
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 0.0563121276
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 0.1689363827
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 2.399128636E-16
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.000001308
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0000353147
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 0.0610237441
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "US Gallon") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.00378541
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 3.78541E-12
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 3785.41
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *3785410
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 3.78541
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 3785.41
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 4
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 8
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 16
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 128
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 256
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 768
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.8326737922
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 3.3306951688
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 6.6613903376
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *133.22780675
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 213.1644908
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 639.49347241
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *9.081685531E-13
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0049511294
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.1336804926
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 230.99989113
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "US Quart") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0009463525
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 9.463525E-13
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 946.3525
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *946352.5
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.9463525
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 946.3525
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.25
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 2
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 4
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 32
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 64
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 192
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.2081684481
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.8326737922
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 1.6653475844
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *33.306951688
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 53.291122701
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 159.8733681
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *2.270421382E-13
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0012377823
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0334201231
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 57.749972783
    }
  }

  //   -----------------------------------------------------

if (Weight1.value === "US Pint") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0004731763
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 4.7317625E-13
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 473.17625
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *473176.25
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.47317625
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 473.17625
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.125
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 0.5
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 2
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 16
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 32
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 96
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.104084224
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.4163368961
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.8326737922
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *16.653475844
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 26.645561351
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 79.936684052
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *1.135210691E-13
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0006188912
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0167100616
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 28.874986392
    }
  }
//   -----------------------------------------------------

if (Weight1.value === "US Cup") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0002365881
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 2.36588125E-13
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 236.588125
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *236588.125
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.236588125
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 236.588125
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0625
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 0.25
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.5
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value * 8
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 16
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 48
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.052042112
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.2081684481
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.4163368961
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *8.326737922
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 13.322780675
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 39.968342026
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *5.676053457E-14
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0003094456
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0083550308
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 14.437493196
    }
  }

  //   -----------------------------------------------------

if (Weight1.value === "US Fluid Ounce") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0000295735
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 2.957351562E-14
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 29.573515625
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *29573.515625
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.0295735156
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 29.573515625
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0078125
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value * 0.03125
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.0625
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.125
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 2
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 6
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.006505264
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.026021056
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.052042112
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *1.0408422403
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 1.6653475844
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 4.9960427532
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *7.095066821E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0000386807
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0010443788
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 1.8046866495
    }
  }

 //   -----------------------------------------------------

 if (Weight1.value === "US Table Spoon") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0000147868
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 1.478675781E-14
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 14.786757812
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *14786.757812
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.0147867578
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 14.786757812
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.00390625
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.015625
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.03125
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0625
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *0.5
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value * 3
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.003252632
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.013010528
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.026021056
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *0.5204211201
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 0.8326737922
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 2.4980213766
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *3.54753341E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0000193403
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0005221894
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 0.9023433247
    }
  }

//   -----------------------------------------------------

if (Weight1.value === "US Tea Spoon") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0000049289
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 4.92891927E-15
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 4.9289192708
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *4928.9192708
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.0049289193
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 4.9289192708
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0013020833
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.0052083333
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.0104166667
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0208333333
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *0.1666666667
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 0.3333333333
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value *0.0010842107
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.0043368427
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 0.0086736853
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *0.1734737067
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 0.2775579307
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 0.8326737922
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *1.182511136E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0000064468
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0001740631
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 0.3007811082
    }
  }

  //   -----------------------------------------------------

if (Weight1.value === "Imperial Gallon") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.00454609
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 4.54609E-12
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 4546.09
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *4546090
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 4.54609
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 4546.09
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 1.2009504915
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *4.803801966
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 9.6076039319
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 19.215207864
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *153.72166291
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 307.44332582
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *922.32997747
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 4
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 8
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *160
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 256
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 768
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *1.09066547E-12
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0059460612
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.1605436532
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 277.41943279
    }
  }

   //   -----------------------------------------------------

if (Weight1.value === "Imperial Quart") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0011365225
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 1.1365225E-12
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 1136.5225
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *1136522.5
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 1.1365225
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 1136.5225
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.3002376229
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *1.2009504915
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 2.401900983
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 4.803801966
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *38.430415728
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 76.860831456
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *230.58249437
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.25
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value * 2
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *40
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 64
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 192
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *2.726663675E-13
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0014865153
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0401359133
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 69.354858198
    }
  }

   //   -----------------------------------------------------

if (Weight1.value === "Imperial Pint") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0005682613
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 5.6826125E-13
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 568.26125
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *568261.25
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.56826125
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 568.26125
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.1501188114
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.6004752457
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 1.2009504915
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 2.401900983
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *19.215207864
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 38.430415728
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *115.29124718
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.125
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.5
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value *20
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 32
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 96
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *1.363331837E-13
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0007432577
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0200679567
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 34.677429099
    }
  }

  //   -----------------------------------------------------

  if (Weight1.value === "Imperial Fluid Ounce") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0000284131
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 2.84130625E-14
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 28.4130625
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *28413.0625
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.0284130625
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 28.4130625
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0075059406
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.0300237623
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.0600475246
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.1200950491
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *0.9607603932
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 1.9215207864
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *5.7645623592
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.00625
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.025
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *0.05
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 1.6
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 4.8
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *6.816659189E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0000371629
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0010033978
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 1.7338714549
    }
  }

  //   -----------------------------------------------------

  if (Weight1.value === "Imperial Table Spoon") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value * 0.0000177582
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 1.775816406E-14
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 17.758164063
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *17758.164063
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.0177581641
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 17.758164063
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0046912129
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.0187648514
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.0375297029
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0750594057
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *0.6004752457
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 1.2009504915
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *3.6028514745
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.00390625
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.015625
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *0.03125
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 0.625
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value * 3
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *4.260411993E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0000232268
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0006271236
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 1.0836696593
    }
  }

  //   -----------------------------------------------------

  if (Weight1.value === "Imperial Tea Spoon") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value *0.0000059194
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 5.91938802E-15
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 5.9193880208
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *5919.3880208
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.005919388
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 5.9193880208
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0015637376
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.0062549505
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.012509901
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0250198019
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *0.2001584152
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 0.4003168305
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *1.2009504915
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.0013020833
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.0052083333
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *0.0104166667
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 0.2083333333
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 0.3333333333
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value *1.420137331E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 0.0000077423
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *0.0002090412
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 0.3612232198
    }
  }

   //   -----------------------------------------------------

   if (Weight1.value === "Cubic Mile") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value *4168180000
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 4.16818
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 4168180000000000
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *4168179999999999500
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 4168180000000
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 4168180000000000
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 1101117184136
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *4404468736544
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 8808937473087
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 17617874946175
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *140942999569399
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 281885999138799
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *845657997416396
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 916871421375
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 3667485685501
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *7334971371002
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 146699427420047
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 234719083872075
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value *704157251616224
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value * 5451773612.4
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *147197887535
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 254357949660781
    }
  }

  //   -----------------------------------------------------

  if (Weight1.value === "Cubic Yard") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value *0.764554858
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 7.645548579E-10
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 764554.85798
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *764554857.98
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 764.55485798
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value* 764554.85798
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 201.97412116
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *807.89648464
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 1615.7929693
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 3231.5859386
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *25852.687509
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 51705.375017
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *155116.12505
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 168.17855739
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 672.71422958
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *1345.4284592
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 26908.569183
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 43053.710693
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value *129161.13208
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 1.834265453E-10
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value *27
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 46656
    }
  }

  //   -----------------------------------------------------

  if (Weight1.value === "Cubic Foot") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value *0.0283168466
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 2.831684659E-11
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 28316.846592
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *28316846.592
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 28.316846592
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value*28316.846592
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 7.480523006
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *29.922092024
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 59.844184048
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 119.6883681
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *957.50694476
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 1915.0138895
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *5745.0416686
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 6.228835459
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 24.915341836
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *49.830683672
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 996.61367345
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 1594.5818775
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value *4783.7456325
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 6.793575755E-12
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value *0.037037037
    }else if (Weight2.value === "Cubic Inch") {
        input12.value = input11.value * 1728
    }
  }

   //   -----------------------------------------------------

   if (Weight1.value === "Cubic Inch") {
    if (Weight2.value === "Cubic Meter") {
      input12.value = input11.value *0.0000163871
    } else if (Weight2.value === "Cubic Kilometer") {
        input12.value = input11.value * 1.6387064E-14
    } else if (Weight2.value === "Cubic Centimeter") {
        input12.value = input11.value * 16.387064
    } else if (Weight2.value === "Cubic Milimeter") {
        input12.value = input11.value *16387.064
    } else if (Weight2.value === "liter") {
        input12.value = input11.value * 0.016387064
    } else if (Weight2.value === "Mililiter") {
        input12.value = input11.value*16.387064
    }else if (Weight2.value === "US Gallon") {
        input12.value = input11.value * 0.0043290064
    }else if (Weight2.value === "US Quart") {
        input12.value = input11.value *0.0173160255
    }else if (Weight2.value === "US Pint") {
        input12.value = input11.value * 0.034632051
    }else if (Weight2.value === "US Cup") {
        input12.value = input11.value * 0.0692641019
    }else if (Weight2.value === "US Fluid Ounce") {
        input12.value = input11.value *0.5541128153
    }else if (Weight2.value === "US Table Spoon") {
        input12.value = input11.value * 1.1082256305
    }else if (Weight2.value === "US Tea Spoon") {
        input12.value = input11.value *3.3246768915
    }else if (Weight2.value === "Imperial Gallon") {
        input12.value = input11.value * 0.0036046501
    }else if (Weight2.value === "Imperial Quart") {
        input12.value = input11.value * 0.0144186006
    }else if (Weight2.value === "Imperial Pint") {
        input12.value = input11.value *0.0288372012
    }else if (Weight2.value === "Imperial Fluid Ounce") {
        input12.value = input11.value * 0.576744024
    }else if (Weight2.value === "Imperial Table Spoon") {
        input12.value = input11.value * 0.9227904384
    }else if (Weight2.value === "Imperial Tea Spoon") {
        input12.value = input11.value *2.7683713151
    }else if (Weight2.value === "Cubic Mile") {
        input12.value = input11.value * 3.931467451E-15
    }else if (Weight2.value === "Cubic Yard") {
        input12.value = input11.value *0.0000214335
    }else if (Weight2.value === "Cubic Foot") {
        input12.value = input11.value * 0.0005787037
    }
  }
}