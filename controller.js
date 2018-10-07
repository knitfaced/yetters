(function (view) {
    let score = 0
    
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
        view.showLetter(random)
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
        let letterIndex = Utils.random(possibleLetters.length)
        let letterColourIndex = Utils.random(possibleColours.length)
        let yetter = {
            letter: possibleLetters.charAt(letterIndex),
            isLowerCase: ((letterIndex * 2) < possibleLetters.length),
            colour: possibleColours[letterColourIndex]
        }
        return yetter
    }
    
    function showSmilies() {
        let numberOfSmilies = 10

        for (i = 0; i < numberOfSmilies; i++) {
            let container = viewUtils.addRandomlyPlacedContainer('smiley-container', view.yettersContainerWidth, view.yettersContainerHeight)
            view.addSmiley(container)
            yettersAnimation.animateContainer(container)
            setTimeout(function() { view.hideSmilies() }, 1000)
        }
    }
    
    function showVictoryUnicorn() {
        view.showVictoryUnicorn()
        setTimeout(function() { view.hideVictoryUnicorn() }, 1000)
    }

    function guessedRight() {
        view.showScore(++score)
        if (score%10 == 0) {
            showVictoryUnicorn()
        } else {
            showSmilies()
        }
        nextTurn()
    }

    function guessedWrong() {
        view.showMonster()
        setTimeout(function() { view.hideMonster() }, 1000)
        view.resetLetterAnimation()
        view.wiggleLetter()
    }

    function startGame() {
        view.hideGame()
        view.showInstructions()
        document.onkeyup = function(event) {
            view.hideInstructions()
            view.showGame()
            nextTurn()
        }            
    }
    
    startGame() 

})(yettersView)