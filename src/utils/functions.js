
/********************
      UTILITIES
*********************/

// Utility per recuperare l'immagine del vino in base alla categoria.
// Usata nei componenti che mostrano vini quando l'API non restituisce immagini.
function recuperaImgVino(category) {

    if (category === "rosso") {
        return "/images/vino-rosso.png";
    }
    else if (category === "bianco") {
        return "/images/vino-bianco.png";
    }
    else {
        return "/images/vino-rosato.png";
    }
}

// Utility debounce per ritardare l'esecuzione di una funzione.
// Usata per evitare chiamate troppo frequenti (es. input di ricerca).
function debounce(callback, delay) {
    let timerId;

    function funzioneRitardata(value) {

        // Se esiste già un timer attivo, lo cancello
        clearTimeout(timerId);

        // Creo un nuovo timer
        timerId = setTimeout(function () {
            callback(value);
        }, delay);
    }

    return funzioneRitardata;
}

export { recuperaImgVino, debounce };