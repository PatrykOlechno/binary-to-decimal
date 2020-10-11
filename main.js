//Setup
const decimal_output = document.getElementById("decimal-output");
const binary_input = document.getElementById("binary-input");
const warning = document.getElementById("warning");
const allowed_keys = [49, 48, 96, 97, 13, 8, 46];

// When to update the output and limit input to 1 & 0
binary_input.addEventListener("keydown", event =>  {
    if(allowed_keys.includes(event.keyCode)){
        warning.style.opacity = "0";
        binaryToDecimal();
    }else{
        event.preventDefault();
        warning.style.opacity = "1";
    }
});

//Converter
function binaryToDecimal() {
    const binary = binary_input.value.split("").reverse();
    let decimal = binary.map( (digit, index) => {
        return (Math.pow(2, index) * digit);
    });
    decimal = decimal.reduce((a, b) => a + b, 0);
    decimal_output.innerHTML = decimal;
}
