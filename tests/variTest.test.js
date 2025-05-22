
//SNACK 1
function inizialiDi(nome, cognome) {
    return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    const iniziali = inizialiDi("Carlo", "Dettori")
    expect(iniziali).toBe("CD")
})

//SNACK 2
function createSlug(stringa) {
    return stringa.toLowerCase()
}

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    const slug = createSlug("Dettori")
    expect(slug).toBe("dettori")
})


//SNACK 3

function mediaNumeri(array) {
    return (array.reduce((acc, curr) => { return acc + curr })) / array.length
}

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const media = mediaNumeri([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(media).toBe(5)
})

//SNACK 4



//SNACK 5



//SNACK 6



//SNACK 7



//SNACK 8 (BONUS)



//SNACK 9 (BONUS)



//SNACK 10 (BONUS)


