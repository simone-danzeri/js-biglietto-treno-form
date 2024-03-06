// pulsante che calcola prezzo biglietto

let priceButton = document.querySelector('#ticket-price-calc');
priceButton.addEventListener('click', function () {
// Chiedere quanti km da fare e trasformarli in num
const userKm = document.querySelector('#user-km').value;
let userKmAsNumeric = parseInt(userKm);

console.log('Km da fare', userKmAsNumeric);

// Chiedere età e trasformarla in num
const userAge = document.querySelector('#user-age').value;
let userAgeAsNumeric = parseInt(userAge);

console.log('Età', userAgeAsNumeric);

// Calcolare prezzo biglietto
const ticketFare = 0.21;
let ticketPrice = ticketFare * userKmAsNumeric;

console.log('Prezzo base biglietto', ticketPrice);

// Calcolare eventuale sconto
let underageDiscount;
let elderlyDiscount;

if (userAge < 18) {

    underageDiscount = ticketPrice * 20 /100;

} else if (userAge > 65) {

    elderlyDiscount = ticketPrice * 40 / 100;
    
}

console.log('Valore sconto se minorenne', underageDiscount);
console.log('Valore sconto se over 65', elderlyDiscount);

// Applicare sconto
let underagePrice;
let elderlyPrice;

underagePrice = (ticketPrice - underageDiscount).toFixed(2);
elderlyPrice = (ticketPrice - elderlyDiscount).toFixed(2);

console.log('Prezzo biglietto se minorenne', underagePrice);
console.log('Prezzo biglietto se over 65', elderlyPrice);

// Stampare output prezzo finale
    let finalPrice

    if (userAge < 18) {

        finalPrice = underagePrice + ' €';

    } else if (userAge > 65) {

        finalPrice = elderlyPrice + ' €';

    } else {

        finalPrice = ticketPrice + ' €';

    }

    let printPrice = document.querySelector('#price-recipient');
    printPrice.innerHTML = finalPrice;

    console.log(finalPrice);
});

//Bottone cancella

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function () {
    document.querySelector('#user-km').value = ' ';
    document.querySelector('#user-age').value = ' ';
    document.querySelector('#price-recipient').innerHTML = ' ';
    document.querySelector('#goodbye').innerHTML = 'Spero di rivederti presto!';
});