const prijmeni = prompt("Zadejte příjmení: ")
const jmeno = prompt("Zadejte křestní jméno: ")

const zkracenePrijmeni = prijmeni.trim().slice(0,5).toLowerCase()
const zkraceneJmeno = jmeno.trim().slice(0,3).toLowerCase()

document.body.innerHTML += `<p>Tvůj email je: ${zkracenePrijmeni}${zkraceneJmeno}@fit.cvut.cz</p>`

//Tento kod funguje ale není v rámci úkolu proto jsem zakomentovala

/* 
function odstranitDiakritiku(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const email = `${zkracenePrijmeni}${zkraceneJmeno}`
const emailBezDiakritiky = odstranitDiakritiku(email)

document.body.innerHTML += `<p>Tvůj email je: ${emailBezDiakritiky}@fit.cvut.cz</p>`

*/