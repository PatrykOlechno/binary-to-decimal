//Setup
const decimal_output = document.getElementById("decimal-output");
const binary_input = document.getElementById("binary-input");
const warning = document.getElementById("warning");
const allowed_keys = ['1', '0', null];
binary_input.designMode = "on";

// When to update the output and limit input to 1 & 0
binary_input.addEventListener("input", event =>  {
    if(allowed_keys.includes(event.data)){
        warning.style.opacity = "0";
        binaryToDecimal();
    }else{
        warning.style.opacity = "1";
        binary_input.value = binary_input.value.substr(0, binary_input.value.length -1)
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
