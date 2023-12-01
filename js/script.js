/* let seconds = 4;
setInterval(function(){
    if(seconds > 1){
        seconds--
        console.log(seconds);
    }
    
},1000) */
let SECONDS_GAME = 4000;

/* Vettore dei numeri inseriti dall'utente */
let userNum = [];
/* Vettore dei numeri casuali di Simon */
let simonNumbers = [];

function randomNumberSimon() {
    /* Inizializzazione del tag ul */
    let numList = document.getElementById('num-list');
    
    /* Generazione dei 5 numeri */
    for (let i = 0; i < 5; i++) {
        let li = document.createElement('li');
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        /* Aggiunta dei numeri in un vettore */
        simonNumbers.push(randomNumber);
        /* Stampa dei numeri in index */
        li.innerText = simonNumbers[i];
        numList.appendChild(li);
    }

    /* Dopo 30 secondi viene tolto tutto dalla lista */
    setTimeout(function () {
        numList.innerText = '';
    }, SECONDS_GAME - 1000);

}

setTimeout(function userInput() {
    /* Chiediamo all'utente di indovinare i numeri */
    for (let i = 1; i <= 5; i++) {
        let number = prompt(`Inserisci il ${i}° numero`);
        userNum.push(number);
    }
    
    
    numberChecker(simonNumbers, userNum)
    function numberChecker(firstArr, secondArr){
        let points = 0;
        console.log('--------NUMERI GIUSTI--------');
        for(let i = 0; i<5; i++){
            if(firstArr.includes(parseInt(secondArr[i]))){
                console.log(secondArr[i]);
                points++
            }
        }
        console.log('------------------------------');
        console.log('Punti: ' + points);
    } 
}, SECONDS_GAME)

randomNumberSimon();




