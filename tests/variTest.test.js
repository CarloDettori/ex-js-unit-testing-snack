

function inizialiDi(Nome, Cognome) {
    return Nome.charAt(0).toUpperCase() + Cognome.charAt(0).toUpperCase()
}

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    const iniziali = inizialiDi("Carlo", "Dettori")
    expect(iniziali).toBe("CD")
})