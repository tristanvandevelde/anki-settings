// Fill in hint with POS for Adverbs and Adjectives
if ("{{POS}}" == ("Adv" || "Adj")) {
    document.getElementById("hint").innerHTML= "({{POS}})" ;
}

// remove stress marks
ru_stress = document.getElementById("raw").innerHTML;
ru_raw = ru_stress.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
document.getElementById("raw").innerHTML = ru_raw;