

let numeroRichiesto = parseInt(prompt('Inserisci un numero'));
 
for (let i = 1; i < 100; i++){
    if ((numeroRichiesto % 3 == 0) && (numeroRichiesto % 5 == 0)) {
        console.log("FizzBuzz")
    } 
    else if (numeroRichiesto % 3 == 0) {
        console.log("Fizz")
    } 
    else if (numeroRichiesto % 5 == 0){
        console.log("Buzz")
    }
    else {
       console.log ("non sei nè un multiplo di 3, nè un multiplo di 5")
    }
}