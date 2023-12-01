/* let seconds = 4;
setInterval(function(){
    if(seconds > 1){
        seconds--
        console.log(seconds);
    }
    
},1000) */

function randomNumberSimon() {
    /* Vettore dei numeri casuali di Simon */
    let simonNumbers = [];

    /* Inizializzazione del tag ul */
    let numList = document.getElementById('num-list');
    let li = document.createElement('li');
    
        /* Generazione dei 5 numeri */
        for (let i = 0; i <= 5; i++) {

            let li = document.createElement('li');
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            /* Aggiunta dei numeri in un vettore */
            simonNumbers.push(randomNumber);

            /* Stampa dei numeri in index */
            li.innerText = simonNumbers[i];
            numList.appendChild(li);
        }

    setTimeout(function(){
        numList.innerText = '';
    },30000)
    
   
}

randomNumberSimon();
