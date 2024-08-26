/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro! */

//TODO    Ricupera gli ellementi dal DOM
const btnPlay = document.getElementById('play');
const grid = document.getElementById('grid')


//TODO    Funzioni
//Creare le celle
function createCell(content){
    const cell = document.createElement('div');
    cell.className = 'square';
    cell.append(content);
    return cell;
}

//Dimensioni della cella
const rolws = 10;
const cols = 10;
const totCells = rolws * cols;

//TODO  Elaborazione
//Creare l'evento per apparire la cella
btnPlay.addEventListener('click', function (){
    //Svuoto la griglia
    grid.innerHTML = '';
    
    //cambio il testo al btn
    btnPlay.innerText = 'Ricomincia'
    
   for (let i = 0; i < totCells; i++){
    //Creo la cella con i numeri
    const square = createCell(i + 1);

    //creare un evento per colorare 
    square.addEventListener('click', function(){
    square.classList.add('clicked');

    //stampiamo il numero della cella cliccata in console
    console.log(i + 1);
    })
    //Stampo
    grid.appendChild(square); 
   }
})