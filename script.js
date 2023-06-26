let input1 = document.getElementById("input1");

let input2 = document.getElementById("input2");

let length1 = document.getElementById("Length1");
let length2 = document.getElementById("Length2");
let result1 = document.getElementById("in");
let result2 = document.getElementById("result");
let unit1 = document.getElementById("unit1");
let unit2 = document.getElementById("unit2");

input1.addEventListener("change", myresult);
input1.addEventListener("keyup", myresult);
length1.addEventListener("change", myresult);
length2.addEventListener("change", myresult);


// for length Converter

function myresult() {
  let inputTypeValue = length1.value;
  let resultTypeValue = length2.value;

  if (inputTypeValue === resultTypeValue) {
    input2.value = input1.value;
  }

  if (inputTypeValue === "Meter" && resultTypeValue === "Kilometer") {
    input2.value = input1.value * 0.001;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Centimeter") {
    input2.value = input1.value * 100;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Milimeter") {
    input2.value = input1.value * 1000000;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Micrometer") {
    input2.value = input1.value * 1000;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Nanometer") {
    input2.value = input1.value * 1000000000;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Mile") {
    input2.value = input1.value * 0.0006213689;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Yard") {
    input2.value = input1.value * 1.0936132983;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Foot") {
    input2.value = input1.value * 3.280839895;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Inches") {
    input2.value = input1.value * 39.37007874;
  } else if (inputTypeValue === "Meter" && resultTypeValue === "Light Year") {
    input2.value = input1.value * 1.057008707e-16;
  }

  //    -----------------------------------------------------------

  //   result1.innerText = input1.value;
  //   result2.innerHTML = input2.value;
  //   unit1.innerText = inputTypeValue + " =";
  //   unit2.innerHTML = resultTypeValue;

  //    -----------------------------------------------------------

  if (inputTypeValue === "Kilometer" && resultTypeValue === "Meter") {
    input2.value = input1.value * 1000;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "Centimeter"
  ) {
    input2.value = input1.value * 100000;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "Milimeter"
  ) {
    input2.value = input1.value * 1000000;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "Micrometer"
  ) {
    input2.value = input1.value * 1000000000;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "Nanometer"
  ) {
    input2.value = input1.value * 1000000000000;
  } else if (inputTypeValue === "Kilometer" && resultTypeValue === "Mile") {
    input2.value = input1.value * 0.6213688756;
  } else if (inputTypeValue === "Kilometer" && resultTypeValue === "Yard") {
    input2.value = input1.value * 1093.6132983;
  } else if (inputTypeValue === "Kilometer" && resultTypeValue === "Foot") {
    input2.value = input1.value * 3280.839895;
  } else if (inputTypeValue === "Kilometer" && resultTypeValue === "Inches") {
    input2.value = input1.value * 39370.07874;
  } else if (
    inputTypeValue === "Kilometer" &&
    resultTypeValue === "Light Year"
  ) {
    input2.value = input1.value * 1.057008707e-13;
  }
  //    -----------------------------------------------------------
  if (inputTypeValue === "Centimeter" && resultTypeValue === "Meter") {
    input2.value = input1.value * 0.01;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Kilometer"
  ) {
    input2.value = input1.value * 0.00001;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Milimeter"
  ) {
    input2.value = input1.value * 10;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Micrometer"
  ) {
    input2.value = input1.value * 10000;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Nanometer"
  ) {
    input2.value = input1.value * 10000000;
  } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Mile") {
    input2.value = input1.value * 0.0000062137;
  } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Yard") {
    input2.value = input1.value * 0.010936133;
  } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Foot") {
    input2.value = input1.value * 0.032808399;
  } else if (inputTypeValue === "Centimeter" && resultTypeValue === "Inches") {
    input2.value = input1.value * 0.3937007874;
  } else if (
    inputTypeValue === "Centimeter" &&
    resultTypeValue === "Light Year"
  ) {
    input2.value = input1.value * 1.057008707e-18;
  }

  //    -----------------------------------------------------------
  if (inputTypeValue === "Milimeter") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 0.001;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 0.000001;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 0.1;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 1000;
    } else if (resultTypeValue === "Nanometer") {
      input2.value = input1.value * 1000000;
    } else if (resultTypeValue === "Mile") {
      input2.value = input1.value * 6.213688756e-7;
    } else if (resultTypeValue === "Yard") {
      input2.value = input1.value * 0.0010936133;
    } else if (resultTypeValue === "Foot") {
      input2.value = input1.value * 0.0032808399;
    } else if (resultTypeValue === "Inches") {
      input2.value = input1.value * 0.0393700787;
    } else if (resultTypeValue === "Light Year") {
      input2.value = input1.value * 1.057008707e-19;
    }
  }
  //    -----------------------------------------------------------

  if (inputTypeValue === "Nanometer") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 1e-9;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 1e-12;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 1e-7;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 0.001;
    } else if (resultTypeValue === "Milimeter") {
      input2.value = input1.value * 0.000001;
    } else if (resultTypeValue === "Mile") {
      input2.value = input1.value * 6.213688756e-13;
    } else if (resultTypeValue === "Yard") {
      input2.value = input1.value * 1.093613298e-9;
    } else if (resultTypeValue === "Foot") {
      input2.value = input1.value * 3.280839895e-9;
    } else if (resultTypeValue === "Inches") {
      input2.value = input1.value * 3.937007874e-8;
    } else if (resultTypeValue === "Light Year") {
      input2.value = input1.value * 1.057008707e-25;
    }
  }
  //    -----------------------------------------------------------

  if (inputTypeValue === "Mile") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 1609.35;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 1.60935;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 160935;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 1609350000;
    } else if (resultTypeValue === "Milimeter") {
      input2.value = input1.value * 1609350;
    } else if (resultTypeValue === "Nanometer") {
      input2.value = input1.value * 1609350000000;
    } else if (resultTypeValue === "Yard") {
      input2.value = input1.value * 1760.0065617;
    } else if (resultTypeValue === "Foot") {
      input2.value = input1.value * 5280.019685;
    } else if (resultTypeValue === "Inches") {
      input2.value = input1.value * 63360.23622;
    } else if (resultTypeValue === "Light Year") {
      input2.value = input1.value * 1.701096963e-13;
    }
  }

  //    -----------------------------------------------------------

  if (inputTypeValue === "Yard") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 0.9144;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 0.0009144;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 91.44;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 914400;
    } else if (resultTypeValue === "Milimeter") {
      input2.value = input1.value * 914.4;
    } else if (resultTypeValue === "Nanometer") {
      input2.value = input1.value * 914400000;
    } else if (resultTypeValue === "Mile") {
      input2.value = input1.value * 0.0005681797;
    } else if (resultTypeValue === "Foot") {
      input2.value = input1.value * 3;
    } else if (resultTypeValue === "Inches") {
      input2.value = input1.value * 36;
    } else if (resultTypeValue === "Light Year") {
      input2.value = input1.value * 9.665287622e-17;
    }
  }

  //    -----------------------------------------------------------

  if (inputTypeValue === "Foot") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 0.3048;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 0.0003048;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 30.48;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 304800;
    } else if (resultTypeValue === "Milimeter") {
      input2.value = input1.value * 304.8;
    } else if (resultTypeValue === "Nanometer") {
      input2.value = input1.value * 304800000;
    } else if (resultTypeValue === "Mile") {
      input2.value = input1.value * 0.0001893932;
    } else if (resultTypeValue === "Yard") {
      input2.value = input1.value * 0.3333333333;
    } else if (resultTypeValue === "Inches") {
      input2.value = input1.value * 12;
    } else if (resultTypeValue === "Light Year") {
      input2.value = input1.value * 3.22176254e-17;
    }
  }

  //    -----------------------------------------------------------

  if (inputTypeValue === "Inches") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 0.0254;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 0.0000254;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 2.54;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 25400;
    } else if (resultTypeValue === "Milimeter") {
      input2.value = input1.value * 25.4;
    } else if (resultTypeValue === "Nanometer") {
      input2.value = input1.value * 25400000;
    } else if (resultTypeValue === "Mile") {
      input2.value = input1.value * 0.0000157828;
    } else if (resultTypeValue === "Yard") {
      input2.value = input1.value * 0.0277777778;
    } else if (resultTypeValue === "Foot") {
      input2.value = input1.value * 0.0833333333;
    } else if (resultTypeValue === "Light Year") {
      input2.value = input1.value * 2.684802117e-18;
    }
  }

  //    -----------------------------------------------------------

  if (inputTypeValue === "Light Year") {
    if (resultTypeValue === "Meter") {
      input2.value = input1.value * 9460660000000000;
    } else if (resultTypeValue === "Kilometer") {
      input2.value = input1.value * 9460660000000;
    } else if (resultTypeValue === "Centimeter") {
      input2.value = input1.value * 946066000000000000;
    } else if (resultTypeValue === "Micrometer") {
      input2.value = input1.value * 9.46066e21;
    } else if (resultTypeValue === "Milimeter") {
      input2.value = input1.value * 9460660000000000000;
    } else if (resultTypeValue === "Nanometer") {
      input2.value = input1.value * 9.460659999e24;
    } else if (resultTypeValue === "Mile") {
      input2.value = input1.value * 5878559666946;
    } else if (resultTypeValue === "Yard") {
      input2.value = input1.value * 10346303587051618;
    } else if (resultTypeValue === "Foot") {
      input2.value = input1.value * 31038910761154856;
    } else if (resultTypeValue === "Inches") {
      input2.value = input1.value * 372466929133858300;
    }
  }
}









