let doc = {
    width: function() { return Math.max(document.documentElement.clientWidth, window.innerWidth || 0) },
    height: function() { return Math.max(document.documentElement.clientHeight, window.innerHeight || 0) },
    instructions: document.getElementById('instructions'),
    letterDiv: document.getElementById('letter-div'),
    animalDiv: document.getElementById('animal-div'),
    scoreDiv: document.getElementById('score-div'),
    letterSound: document.getElementById('letter-sound'),
    soundEffect: document.getElementById('sound-effect'),
    yettersContainer: document.getElementById('yetters-container'),
    unicornContainer: function() {  return document.getElementsByClassName('unicorn-container')[0] },
    smileyContainers: function() { return document.getElementsByClassName('smiley-container') }
}

let viewUtils = {
    addRandomlyPlacedContainer: function(className, maxLeft, maxTop) {
        let containerTop = Utils.random(maxTop)
        let containerLeft = Utils.random(maxLeft)
        let newContainerElement = document.createElement('div')        
        newContainerElement.className = className        
        newContainerElement.style.top = containerTop + "px"
        newContainerElement.style.left = containerLeft + "px"        
        var randomContainer = {
            containerElement: newContainerElement,
            top: containerTop,
            left: containerLeft
        }
        doc.yettersContainer.appendChild(newContainerElement)
        return randomContainer
    }   
}

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
                let newTop = container.top + (i*topMultiplier)
                let newLeft = container.left + (i*leftMultiplier)
                let offBottomEdge = doc.height() < (newTop + container.height)
                let offRightEdge = doc.width() < (newLeft + container.width)
                if (!offBottomEdge) {
                    container.containerElement.style.top = newTop + "px"
                }
                if (!offRightEdge) {
                    container.containerElement.style.left = newLeft + "px"
                }
            }
        }
    }    
}


let yettersView = {
    yettersContainerWidth: doc.yettersContainer.getBoundingClientRect().width,
    yettersContainerHeight: doc.yettersContainer.getBoundingClientRect().height,
    
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
        doc.letterSound.src = "sounds/letterSounds/" + randomLetter.letter.toLowerCase() + ".mp3"
        
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
        
    },
    
    hideSmilies: function() {
        let smileyContainers = doc.smileyContainers()
        for (i = 0; i < smileyContainers.length; i++) {
            doc.yettersContainer.removeChild(smileyContainers[i])
        }
    },
    
    showVictoryUnicorn: function() {
        doc.soundEffect.src = "sounds/neigh.wav"
        let unicornContainer = viewUtils.addRandomlyPlacedContainer('unicorn-container', 200, 200)
        yettersAnimation.animateContainer(unicornContainer)
    },
    
    hideVictoryUnicorn: function() {
        doc.yettersContainer.removeChild(doc.unicornContainer())
    },
    
    showScore: function(score) {
        doc.scoreDiv.innerHTML = score
    }
}