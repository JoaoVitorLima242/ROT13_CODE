function getIndexInAlphabet (letter, alpArr) {
  return alpArr.indexOf(letter)
}

function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
  const strArray = str.split('')
  let srtFormated = ""

  for (var i = 0; i < strArray.length; i++) {
    const indexOfLetter = getIndexInAlphabet(strArray[i], alphabet)
    const indexROT13 = indexOfLetter + 13


    if (indexROT13 >= 26 ) {
        indexROT13 = indexOfLetter + 13 - 26
    }

    if (indexOfLetter === -1) {
      srtFormated += strArray[i]
    } else {
      srtFormated += alphabet[indexROT13]
    }

  }

  console.log(srtFormated)

  return srtFormated;
}

rot13("SERR PBQR PNZC!");
