function palindromeNumber(x) {
    let str = x.toString()
    if (str === str.split("").reduce((x, y) => (y + x))) {
        return console.log(true)
    } else return console.log(false)
}

palindromeNumber(121)