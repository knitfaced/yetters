function yetters() {
    var letter = 'a'
    showLetter(letter)
}

function showLetter(letter) {
    //alert('the letter is '+letter)
    var letterDiv = document.getElementById('letter_div')
    letterDiv.innerHTML = letter
}

yetters()