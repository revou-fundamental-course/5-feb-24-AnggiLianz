// Konversi
function convertTemp() {
    var inputTemp = document.getElementById("inputTemp").value;
    if (inputTemp === "") {
        document.getElementById("warning").innerHTML = "Silahkan masukkan suhu!";
        return;
    } else {
        document.getElementById("warning").innerHTML = "";
    }
    
    var selectFrom = document.getElementById("selectFrom").value;
    var resultDiv = document.getElementById("result");
    var result;
  
    if (selectFrom === "celcius") {
        result = {
            "Fahrenheit:": (inputTemp * 9/5) + 32 + "° F",
            "Kelvin:": parseFloat(inputTemp) + 273.15 + " K",
            "Reamur:": inputTemp * 4/5 + "° R"
        };
    } else if (selectFrom === "fahrenheit") {
        result = {
            "Celcius:": (inputTemp - 32) * 5/9 + "°C",
            "Kelvin:": (inputTemp - 32) * 5/9 + 273.15 + "K",
            "Reamur:": (inputTemp - 32) * 4/9 + "°R"
        };
    } else if (selectFrom === "kelvin") {
        result = {
            "Celcius:": inputTemp - 273.15 + "°C",
            "Fahrenheit:": (inputTemp - 273.15) * 9/5 + 32 + "°F",
            "Reamur:": (inputTemp - 273.15) * 4/5 + "°R"
        };
    } else if (selectFrom === "reamur") {
        result = {
            "Celcius:": inputTemp * 5/4 + "°C",
            "Fahrenheit:": (inputTemp * 9/4) + 32 + "°F",
            "Kelvin:": (inputTemp * 5/4) + 273.15 + "K"
        };
    }
  
    resultDiv.innerHTML = "<p id='result-heading' style='font-size: 20px; font-weight: bold;'>Berikut hasil dari konversi:</p>";
    for (var unit in result) {
        resultDiv.innerHTML += "<p><b style='display: inline-block; width: 100px;'>" + unit + "</b> " + result[unit] + "</p>";
    }
  }
  
  // Reset
  function resetFields() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("selectFrom").selectedIndex = 0;
    document.getElementById("result").innerHTML = "";
    document.getElementById("warning").innerHTML = "";
  }
  