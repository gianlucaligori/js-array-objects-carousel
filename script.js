// Consegna:
// Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto insieme a lezione, che troverete direttamente nella mia repository di github a questo link: https://github.com/henri-kapidani/classe96-0420-carousel
// Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati. Ricordiamo sempre l'importanza dell'integrità del dato.
// Bonus 1:
// Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello: al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.
// Bonus 2:
// E se volessi un bottone per invertire la "direzione" del carosello?


const arrImages = [
    'assets/img/01.webp',
    'assets/img/02.webp',
    'assets/img/03.webp',
    'assets/img/04.webp',
    'assets/img/05.webp',
];

const containerHighlighted = document.querySelector('.highlighted');
const containerThumbs = document.querySelector('.thumbs');

for (let i = 0; i < arrImages.length; i++) {
    containerHighlighted.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? 'active' : ''}">`;
    containerThumbs.innerHTML += `<img src="${arrImages[i]}" alt="" class="${i == 0 ? 'active' : ''}">`;
}


// selezionimo le immagini nell'html
const listHighlighted = document.querySelectorAll('.highlighted img');
// selezioniamo le miniature
const listThumbs = document.querySelectorAll('.thumbs img');
// selezioniamo i bottoni
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


// definito una variabile che rappresenta lo stato attuale del carosello
// cioe' l'indice dell'immagine attiva
let activeIndex = 0;

btnNext.addEventListener('click',
    function () {
        // dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        // settiamo il nuovo valore di active index
        activeIndex++;
        if (activeIndex >= listHighlighted.length) {
            activeIndex = 0;
        }
        // alla nuova immagine attiva aggiungiamo la classe active
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
    }
);

btnPrev.addEventListener('click',
    function () {
        // dall'immagine attiva tolgo la classe active
        listHighlighted[activeIndex].classList.remove('active');
        listThumbs[activeIndex].classList.remove('active');
        // settiamo il nuovo valore di active index
        activeIndex--;
        if (activeIndex < 0) {
            activeIndex = listHighlighted.length - 1;
        }
        // alla nuova immagine attiva aggiungiamo la classe active
        listHighlighted[activeIndex].classList.add('active');
        listThumbs[activeIndex].classList.add('active');
    }
);

// ciclo per aggiungere gli event listeners alle miniature
for (let i = 0; i < listThumbs.length; i++) {
    listThumbs[i].addEventListener('click',
        function () {
            console.log('cliccata la miniature in posizione ' + i)
            listHighlighted[activeIndex].classList.remove('active');
            listThumbs[activeIndex].classList.remove('active');
            activeIndex = i;
            listHighlighted[activeIndex].classList.add('active');
            listThumbs[activeIndex].classList.add('active');
        }
    )
}