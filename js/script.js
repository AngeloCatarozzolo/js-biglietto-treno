const outputHtml =  document.getElementById('output');
//numero di km che l'utente dovrà inserire
let numberKm = prompt('inserisci numero km che  vuoi percorrere');
numberKm = parseFloat(numberKm);
console.log(numberKm);
//età dell'utente
let age = prompt('inserisci età del passeggero');
age = parseInt(age);
console.log(age);
//costo di 1km (0.21€)
//costante km per indicare 0.21 euro,che verrà moltiplicata ai km da percorrere
const km = 0.21;
price = km * numberKm;
price = parseFloat(price).toFixed(2);
console.log(price);
//se l' età è minore di 18anni si applica sconto del 20%(prezzo * 20 diviso 100)
//se età >=65 allora si applica sconto del 40%(prezzo * 40 diviso 100)
let sale;
sale = parseFloat(sale);
//dichiaro variabile final price che sarà il prezzo pieno - sconto applicato
let finalPrice;
//qui svolgo la mia condizione
if(age<18){
    sale= (price * 20) / 100; 
    finalPrice = price - sale;
    finalPrice=parseFloat(finalPrice).toFixed(2);
    outputHtml.innerHTML = `Il tuo prezzo è : ${finalPrice}€`;
}else if(age>=65){
    sale = (price * 40) / 100;
    finalPrice = price - sale;
    finalPrice=parseFloat(finalPrice).toFixed(2);
    outputHtml.innerHTML = `il tuo prezzo è: ${finalPrice}€`;
}else{
    finalPrice = price;
    outputHtml.innerHTML = `il tuo prezzo è: ${finalPrice}€`;
}