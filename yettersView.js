let yettersAnimation = {
    
    animateSmiley: function(smiley, smileyTop, smileyLeft) {
        let i = 0
        let duration = 200
        var interval = setInterval(moveSmiley, Utils.random(5))    
        let topMultiplier = Utils.random(10) - 5
        let leftMultiplier = Utils.random(10) - 5
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
}

let yettersView = {
    
    showLetter: function(randomLetter) {
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
    },
    
    wiggleLetter: function() {
        let letterDiv = document.getElementById('letter-div')
        letterDiv.className = 'wiggle'
    },
    
    resetLetterAnimation: function() {
        let letterDiv = document.getElementById('letter-div')
        letterDiv.classList.remove('wiggle')
        void letterDiv.offsetWidth
    },

    addSmiley: function() {
        let yettersContainer = document.getElementById('yetters-container')
        let yettersContainerWidth = yettersContainer.getBoundingClientRect().width
        let yettersContainerHeight = yettersContainer.getBoundingClientRect().height
        let smileyContainer = document.createElement('div')
        smileyContainer.className = 'smiley-container'
        let smileyTop = Utils.random(yettersContainerHeight)
        let smileyLeft = Utils.random(yettersContainerWidth)
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
        let colourIndex = Utils.random(possibleColours.length)
        
        let face = document.createElement('div')
        face.className = 'face'
        face.style.background = possibleColours[colourIndex]
        smileyContainer.appendChild(face)
        yettersAnimation.animateSmiley(smileyContainer, smileyTop, smileyLeft)
        yettersContainer.appendChild(smileyContainer)
    },
    
    hideSmilies: function() {
        let smileyContainers = document.getElementsByClassName('smiley-container')
        
        for (i = 0; i < smileyContainers.length; i++) {
            document.getElementById('yetters-container').removeChild(smileyContainers[i])
        }
    }
}