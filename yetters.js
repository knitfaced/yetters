var yetters = (function () {
    
    function nextTurn() {
        let random = createRandomLetter()
        showLetter(random)
        document.onkeyup = function(event) {
            let letterPressed = String.fromCharCode(event.which)
            if (letterPressed.toLowerCase() == random.letter.toLowerCase()) {
                guessedRight()
            } else {
                guessedWrong()
            }
        }
    }

    function showLetter(randomLetter) {
        let letterDiv = document.getElementById('letter-div')
        let animalDiv = document.getElementById('animal-div')
        letterDiv.innerHTML = randomLetter.letter

        if (randomLetter.isLowerCase) {
            letterDiv.className = 'lowercase'
            animalDiv.className = 'snake'
        } else {
            letterDiv.className = 'uppercase'
            animalDiv.className = 'giraffe'
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

    function guessedRight() {
        //alert('yay')
        nextTurn()
    }

    function guessedWrong() {
        //alert('boo')
    }

    nextTurn()

})()