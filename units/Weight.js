let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");

let Weight1 = document.getElementById("Weight1");
let Weight2 = document.getElementById("Weight2");

input9.addEventListener("change", myresult5);
input9.addEventListener("keyup", myresult5);
Weight1.addEventListener("change", myresult5);
Weight2.addEventListener("change", myresult5);

function myresult5() {
  if (Weight1.value === Weight2.value) {
    input10.value = input9.value;
  }
  if (Weight1.value === "Kilogram") {
    if (Weight2.value === "Gram") {
      input10.value = input9.value * 1000;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 1000000;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 0.001;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value * 0.0009842073;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 0.0011023122;
    } else if (Weight2.value === "Pound") {
      input10.value = input9.value * 2.2046244202;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 35.273990723;
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 5000;
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 6.022136652E+26;
    }
  }
// ------------------------------------------------------

if (Weight1.value === "Gram") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 0.001;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 1000;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 0.000001;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value * 9.842073304E-7;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 0.0000011023;
    } else if (Weight2.value === "Pound") {
      input10.value = input9.value * 0.0022046244;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 0.0352739907;
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 5;
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 6.022136652E+23;
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Miligram") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 0.000001;
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 0.001;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 9.999999999E-10;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value * 9.842073304E-10;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 1.10231221E-9;
    } else if (Weight2.value === "Pound") {
      input10.value = input9.value * 0.0000022046;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 0.000035274;
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 0.005;
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 602213665200000000000;
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Metric Ton") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 1000;
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 1000000;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 1000000000;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value * 0.9842073304;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 1.1023122101;
    } else if (Weight2.value === "Pound") {
      input10.value = input9.value * 2204.6244202;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 35273.990723
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 5000000
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 6.022136652E+29;
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Long Ton") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 1016.04608;
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 1016046.08;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 1016046080;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 1.01604608;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 1.12;
    } else if (Weight2.value === "Pound") {
      input10.value = input9.value * 2240;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 35840
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 5080230.4
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 6.118768338E+29
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Short Ton") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 907.184;
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 907184;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 907184000;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 0.907184;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value * 0.8928571429;
    } else if (Weight2.value === "Pound") {
      input10.value = input9.value * 2000;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 32000
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 4535920
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 5.463186016E+29
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Pound") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 0.453592;
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 453.592;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 453592;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 0.000453592;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value *0.0004464286;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 0.0005;
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 16
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 2267.96
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 2.731593008E+26
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Ounce") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 0.0283495;
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 28.3495;
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 28349.5;
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 0.0000283495;
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value *0.0000279018;
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 0.00003125;
    }else if (Weight2.value === "Pound") {
        input10.value = input9.value * 0.0625
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 141.7475
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 1.70724563E+25
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Carrat") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 0.0002
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 0.2
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value * 200
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 2.E-7
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value *1.96841466E-7
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 2.20462442E-7
    }else if (Weight2.value === "Pound") {
        input10.value = input9.value * 0.0004409249
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 0.0070547981
    }else if (Weight2.value === "Atomic Mass Unit") {
        input10.value = input9.value * 1.20442733E+23
    }
  }

// ------------------------------------------------------

if (Weight1.value === "Atomic Mass Unit") {
    if (Weight2.value === "Kilogram") {
      input10.value = input9.value * 1.660540199E-27
    } else if (Weight2.value === "Gram") {
      input10.value = input9.value * 1.660540199E-24
    } else if (Weight2.value === "Miligram") {
      input10.value = input9.value *1.660540199E-21
    } else if (Weight2.value === "Metric Ton") {
      input10.value = input9.value * 1.660540199E-30
    } else if (Weight2.value === "Long Ton") {
      input10.value = input9.value *1.634315837E-30
    } else if (Weight2.value === "Short Ton") {
      input10.value = input9.value * 1.830433737E-30
    }else if (Weight2.value === "Pound") {
        input10.value = input9.value * 3.660867475E-27
    }else if (Weight2.value === "Ounce") {
        input10.value = input9.value * 5.85738796E-26
    }else if (Weight2.value === "Carrat") {
        input10.value = input9.value * 8.302700999E-24
    }
  }
}
