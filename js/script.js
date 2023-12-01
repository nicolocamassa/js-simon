/* let seconds = 4;
setInterval(function(){
    if(seconds > 1){
        seconds--
        console.log(seconds);
    }
    
},1000) */

function randomNumberSimon() {
    let simonNumbers = [];
    let numList = document.getElementById('num-list');

    for(let i = 0; i <= 5; i++){
        
        let li = document.createElement('li');
        

        let randomNumber = Math.floor(Math.random() * 100 ) + 1;
        simonNumbers.push(randomNumber);

        li.innerText = simonNumbers[i];
        numList.appendChild(li);
    }
}

randomNumberSimon();
