//Variables 

let dolar =  5.6;

let usdInput = document.querySelector("#usd");
let brlInput = document.querySelector("#brl");



//Events and functions

usdInput.addEventListener("keyup", () => {
    convert("usd-to-brl")
});

brlInput.addEventListener("keyup", () => {
    convert("brl-to-usd")
});

usdInput.addEventListener("blur", () =>{
    usdInput.value = formatCurrency(usdInput.value)
});

brlInput.addEventListener("blur", () =>{
    brlInput.value = formatCurrency(brlInput.value)
});

usdInput.value = "1000,00";
convert("usd-to-brl");


function formatCurrency(value){
    //Adjuste the value 
    let fixedValue = fixValue(value);

    //Ultilizes function fomat
    let options = {
        useGrouping: false,
        minimumFractionDigits: 2     
    }   
    let formatter = new Intl.NumberFormat("pt-BR", options);

    //Retuns the formatted  value
    return formatter.format(fixedValue);
}

function fixValue(value){
    let fixedValue = value.replace(",", ".");
    let floatValue = parseFloat(fixedValue);

    if(floatValue == NaN){
        floatValue = 0
    }
    return floatValue
}

function convert(type){
    if(type == "usd-to-brl"){
        //Adjust the value
        let fixedValue = fixValue(usdInput.value);

        //Convert the value
        let result = fixedValue * dolar;
        result = result.toFixed(2);

        //Show on camp brl     
        brlInput.value = formatCurrency(result);
    }

    if(type == "brl-to-usd"){
        //Adjust the value
        let fixedValue = fixValue(brlInput.value);

        //Convert the value
        let result = fixedValue / dolar;
        result = result.toFixed(2);

        //Show on camp brl     
        usdInput.value = formatCurrency(result);
    }  
}
          