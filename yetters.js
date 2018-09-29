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

    function showStars() {
        let yettersContainer = document.getElementById('yetters-container')
        let yettersContainerWidth = yettersContainer.getBoundingClientRect().width
        let yettersContainerHeight = yettersContainer.getBoundingClientRect().height
        yettersContainer.appendChild(addStar(yettersContainerWidth, yettersContainerHeight))

        setTimeout(hideStars, 500)
    }

    function addStar(yettersContainerWidth, yettersContainerHeight) {
        let starContainer = document.createElement('div')
        starContainer.id = 'star-container'
        starContainer.style.top = Math.floor(Math.random() * yettersContainerHeight) + "px"
        starContainer.style.left = Math.floor(Math.random() * yettersContainerWidth) + "px"
        
        let starDiv = document.createElement('div')
        starDiv.className = 'star'
        //starDiv.style.borderBottomColor = 'yellow'
        //starDiv.style.borderTopColor = 'yellow'
        
        starContainer.appendChild(starDiv)
        return starContainer   
    }
    
    function hideStars() {
        //alert('hiding stars')
        var starContainer = document.getElementById('star-container')
        document.getElementById('yetters-container').removeChild(starContainer)
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
        //showStars()
        nextTurn()
    }

    function guessedWrong() {
        resetLetterAnimation()
        //alert('guessed wrong')
        wiggleLetter()
    }

    
    nextTurn()
    

})()