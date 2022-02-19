document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", Calc);
function Calc(e) {
    let userInput = e.target.value;

    let selectBox = document.getElementById("selectUnit");
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    document.getElementsByName("inputValues")[0].placeholder =
        selectedValue;

    if (selectedValue === "Pounds") {
        document.getElementById("gramsOutput").innerHTML = (userInput / 0.0022046).toFixed(3);
        document.getElementById("kgOutput").innerHTML = (userInput / 2.2046).toFixed(3);
        document.getElementById("ozOutput").innerHTML = userInput * 16;
        document.getElementById("output").style.visibility = "visible";
    } else if (selectedValue === "Kilograms") {
        document.getElementById("gramsOutput").innerHTML = userInput * 1000;
        document.getElementById("kgOutput").style.display = "none";
        document.getElementById("ozOutput").innerHTML = (userInput * 35.274).toFixed(3);
        document.getElementById("output").style.visibility = "visible";
    } else if (selectedValue === "Ouuces") {
        document.getElementById("gramsOutput").innerHTML = (userInput * 28.35).toFixed(3);
        document.getElementById("kgOutput").innerHTML = (userInput / 35.274).toFixed(3);
        document.getElementById("ozOutput").style.display = "none";
        document.getElementById("output").style.visibility = "visible";
    }
    // document.getElementById("gramsOutput").innerHTML = userInput / 0.0022046;
    // document.getElementById("kgOutput").innerHTML = userInput / 2.2046;
    // document.getElementById("ozOutput").innerHTML = userInput * 16;
    // document.getElementById("output").style.visibility = "visible";
}