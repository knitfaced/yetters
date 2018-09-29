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
            animalDiv.className = 'snake'
        } else {
            animalDiv.className = 'giraffe'
        }
    }
    
    function wiggleLetter() {
        let letterDiv = document.getElementById('letter-div')
        letterDiv.className = 'wiggle'
    }
    
    function resetLetterAnimation() {
        let letterDiv = document.getElementById('letter-div')
        letterDiv.classList.remove('wiggle')
        void letterDiv.offsetWidth
    }

    function showSmilies() {
        let yettersContainer = document.getElementById('yetters-container')
        let yettersContainerWidth = yettersContainer.getBoundingClientRect().width
        let yettersContainerHeight = yettersContainer.getBoundingClientRect().height
        
        //yettersContainer.appendChild(addSmiley(yettersContainerWidth, yettersContainerHeight))

        for (i = 0; i < 5; i++) {
            let container = yettersContainer.appendChild(addSmiley(yettersContainerWidth, yettersContainerHeight))
            setTimeout(function() { hideSmilies() }, 1000)
        }
        
    }

    function addSmiley(yettersContainerWidth, yettersContainerHeight) {
        let smileyContainer = document.createElement('div')
        smileyContainer.className = 'smiley-container'
        smileyContainer.style.top = Math.floor(Math.random() * yettersContainerHeight) + "px"
        smileyContainer.style.left = Math.floor(Math.random() * yettersContainerWidth) + "px"
        
        let face = document.createElement('div')
        face.className = 'face'
        smileyContainer.appendChild(face)
        return smileyContainer   
    }
    
    function hideSmilies() {
        //alert('hiding smilies')
        let smileyContainers = document.getElementsByClassName('smiley-container')
        
        for (i = 0; i <= smileyContainers.length; i++) {
            document.getElementById('yetters-container').removeChild(smileyContainers[i])
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
        showSmilies()
        nextTurn()
    }

    function guessedWrong() {
        resetLetterAnimation()
        //alert('guessed wrong')
        wiggleLetter()
    }

    
    nextTurn()
    

})()