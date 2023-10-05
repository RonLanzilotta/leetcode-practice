function romanToInteger(roman) {
    let romanNumerals = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }

    for (let i = 0; i < roman.length - 1; i++) {
        if (roman[i] in romanNumerals) {
            roman[i] = romanNumerals[roman[i]]
        }
        
    }
}
romanToInteger('III')