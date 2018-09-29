var yetters = (function () {
    
    function nextTurn() {
        let random = createRandomLetter()        
        document.onkeyup = function(event) {
            let letterPressed = String.fromCharCode(event.which)
            if (letterPressed.toLowerCase() == random.letter.toLowerCase()) {
                guessedRight()
            } else {
                guessedWrong()
            }
        }
        showLetter(random)
    }

    function showLetter(randomLetter) {
        let letterDiv = document.getElementById('letter-div')
        let animalDiv = document.getElementById('animal-div')
        let letterSound = document.getElementById('letter-sound')
        letterDiv.innerHTML = randomLetter.letter
        letterDiv.style.color = randomLetter.colour
        letterSound.type = "audio/mpeg"
        letterSound.src = "letterSounds/" + randomLetter.letter.toLowerCase() + ".mp3"
        
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
        
        let numberOfSmilies = 10

        for (i = 0; i < numberOfSmilies; i++) {
            let container = yettersContainer.appendChild(addSmiley(yettersContainerWidth, yettersContainerHeight))
            setTimeout(function() { hideSmilies() }, 1000)
        }
        
    }

    function addSmiley(yettersContainerWidth, yettersContainerHeight) {
        let smileyContainer = document.createElement('div')
        smileyContainer.className = 'smiley-container'
        let smileyTop = random(yettersContainerHeight)
        let smileyLeft = random(yettersContainerWidth)
        smileyContainer.style.top = smileyTop + "px"
        smileyContainer.style.left = smileyLeft + "px"
        
        let possibleColours = ['aqua', 
                       'white',
                       'yellow',
                       'blue',
                       'lightgray', 
                       'fuchsia', 
                       'grey', 
                       'green',
                       'red', 
                       'lime', 
                       'teal',
                       'orange']        
        let colourIndex = random(possibleColours.length)
        
        let face = document.createElement('div')
        face.className = 'face'
        face.style.background = possibleColours[colourIndex]
        smileyContainer.appendChild(face)
        animateSmiley(smileyContainer, smileyTop, smileyLeft)
        return smileyContainer   
    }
    
    function random(size) {
        return Math.floor(Math.random() * size)
    }
    
    function animateSmiley(smiley, smileyTop, smileyLeft) {
        let i = 0
        let duration = 200
        var interval = setInterval(moveSmiley, random(5))    
        let topMultiplier = random(10) - 5
        let leftMultiplier = random(10) - 5
        function moveSmiley() {            
            if (i >= duration) {
                clearInterval(interval)
            } else {
                i++
                smiley.style.top = (smileyTop + (i*topMultiplier)) + "px"
                smiley.style.left = (smileyLeft + (i*leftMultiplier)) + "px"
            }
        }
    }
    
    function hideSmilies() {
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
        let letterIndex = random(possibleLetters.length)
        let letterColourIndex = random(possibleColours.length)
        let yetter = {
            letter: possibleLetters.charAt(letterIndex),
            isLowerCase: ((letterIndex * 2) < possibleLetters.length),
            colour: possibleColours[letterColourIndex]
        }
        return yetter
    }

    function guessedRight() {
        showSmilies()
        nextTurn()
    }

    function guessedWrong() {
        resetLetterAnimation()
        wiggleLetter()
    }

    nextTurn()

})()