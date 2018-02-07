// 1. Randomize the order of the following number set: "22, 14, 3, 4, 37, 6, 7, 81, 9, 10"

function randomize(arr) {
  let index = arr.length
  let random, temp;

  while (index > 0) {
    random = Math.floor(Math.random() * index)
    index--
    //swap
    temp = arr[index]
    arr[index] = arr[random]
    arr[random] = temp
  }

  return arr;
}

// 2. Find the mean of the following number set: "22, 14, 3, 4, 37, 6, 7, 81, 9, 10"

//note: I didn't include error checking that the set was all integer or had a length > 0, as you gave us the array

function findMean(arr) {
  return arr.reduce((acc,item) => acc+item,0)/arr.length
}

// Bonus: Use the shortest possible regular expression or replacement method using php, ruby or javascript to put a smiley face after every word that ends in a vowel in this sentence.


//note: I put the :) after the period at the end of the sentence.  hope that's okay
function addSmiley(sentence) {
  var endVowel = (x) => (/[aeiouyAEIOUY]/.test(x.charAt(x.length-1)) || ( /[.,!?]/.test(x.charAt(x.length-1)) && /[aeiouyAEIOUY]/.test(x.charAt(x.length-2))  ))
  return sentence.split(" ").map(word => (endVowel(word) ? word.concat(":)") : word)).join(" ")
}
