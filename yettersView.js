let yettersAnimation = {
    
    animateContainer: function(container) {
        let i = 0
        let duration = 200
        var interval = setInterval(moveContainer, Utils.random(5))    
        let topMultiplier = Utils.random(10) - 5
        let leftMultiplier = Utils.random(10) - 5
        function moveContainer() {            
            if (i >= duration) {
                clearInterval(interval)
            } else {
                i++
                container.containerElement.style.top = (container.top + (i*topMultiplier)) + "px"
                container.containerElement.style.left = (container.left + (i*leftMultiplier)) + "px"
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

    addRandomlyPlacedContainer: function(className) {
        let yettersContainerWidth = doc.yettersContainer.getBoundingClientRect().width
        let yettersContainerHeight = doc.yettersContainer.getBoundingClientRect().height
        let containerTop = Utils.random(yettersContainerHeight)
        let containerLeft = Utils.random(yettersContainerWidth)
        let newContainerElement = document.createElement('div')        
        newContainerElement.className = className        
        newContainerElement.style.top = containerTop + "px"
        newContainerElement.style.left = containerLeft + "px"        
        var randomContainer = {
            containerElement: newContainerElement,
            top: containerTop,
            left: containerLeft
        }        
        return randomContainer
    },
    
    addSmiley: function(container) {
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
        container.containerElement.appendChild(face)
        doc.yettersContainer.appendChild(container.containerElement)
    },
    
    hideSmilies: function() {
        let smileyContainers = doc.smileyContainers()
        for (i = 0; i < smileyContainers.length; i++) {
            doc.yettersContainer.removeChild(smileyContainers[i])
        }
    }
}