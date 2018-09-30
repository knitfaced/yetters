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

let doc = {
    instructions: document.getElementById('instructions'),
    letterDiv: document.getElementById('letter-div'),
    animalDiv: document.getElementById('animal-div'),
    letterSound: document.getElementById('letter-sound'),
    yettersContainer: document.getElementById('yetters-container'),
    smileyContainers: function() { return document.getElementsByClassName('smiley-container') }
}

let yettersView = {
    showGame: function() {
        doc.yettersContainer.style.display = 'block'
    },
    
    hideGame: function() {
        doc.yettersContainer.style.display = 'none'
    },
    
    showInstructions: function() {
        doc.instructions.style.display = 'block'    
    },
    
    hideInstructions: function() {
        doc.instructions.style.display = 'none'    
    },
    
    showLetter: function(randomLetter) {        
        doc.letterDiv.innerHTML = randomLetter.letter
        doc.letterDiv.style.color = randomLetter.colour
        doc.letterSound.type = "audio/mpeg"
        doc.letterSound.src = "letterSounds/" + randomLetter.letter.toLowerCase() + ".mp3"
        
        if (randomLetter.isLowerCase) {
            doc.animalDiv.className = 'snake'
        } else {
            doc.animalDiv.className = 'giraffe'
        }
    },
    
    wiggleLetter: function() {
        doc.letterDiv.className = 'wiggle'
    },
    
    resetLetterAnimation: function() {        
        doc.letterDiv.classList.remove('wiggle')
        void doc.letterDiv.offsetWidth
    },

    addSmiley: function() {
        let yettersContainerWidth = doc.yettersContainer.getBoundingClientRect().width
        let yettersContainerHeight = doc.yettersContainer.getBoundingClientRect().height
        let smileyTop = Utils.random(yettersContainerHeight)
        let smileyLeft = Utils.random(yettersContainerWidth)
        let smileyContainer = document.createElement('div')
        smileyContainer.className = 'smiley-container'        
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
        doc.yettersContainer.appendChild(smileyContainer)
    },
    
    hideSmilies: function() {
        let smileyContainers = doc.smileyContainers()
        for (i = 0; i < smileyContainers.length; i++) {
            doc.yettersContainer.removeChild(smileyContainers[i])
        }
    }
}