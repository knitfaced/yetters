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
        letterDiv.style.color = randomLetter.colour

        if (randomLetter.isLowerCase) {
            //letterDiv.className = 'lowercase'
            animalDiv.className = 'snake'
        } else {
            //letterDiv.className = 'uppercase'
            animalDiv.className = 'giraffe'
        }
    }

    function createRandomLetter() {
        let possibleColours = ['aqua', 
                       'blue', 
                       'fuchsia', 
                       'grey', 
                       'green', 
                       'maroon', 
                       'navy', 
                       'olive', 
                       'purple', 
                       'red', 
                       'lime', 
                       'teal',
                       'orange']
        let possibleLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let letterIndex = Math.floor(Math.random() * possibleLetters.length)
        let letterColourIndex = Math.floor(Math.random() * possibleColours.length)
        let yetter = {
            letter: possibleLetters.charAt(letterIndex),
            isLowerCase: ((letterIndex * 2) < possibleLetters.length),
            colour: possibleColours[letterColourIndex]
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