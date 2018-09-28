function yetters() {
    let random = createRandomLetter()
    showLetter(random)
}

function showLetter(randomLetter) {
    let letterDiv = document.getElementById('letter-div')
    letterDiv.innerHTML = randomLetter.letter
    
    if (randomLetter.isLowerCase) {
        letterDiv.className = 'lowercase'
    } else {
        letterDiv.className = 'uppercase'
    }
}

function createRandomLetter() {
    let possibleLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letterIndex = Math.floor(Math.random() * possibleLetters.length)
    let yetter = {
        letter: possibleLetters.charAt(letterIndex),
        isLowerCase: ((letterIndex * 2) < possibleLetters.length)
    }
    return yetter
}

yetters()