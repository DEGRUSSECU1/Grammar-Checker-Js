let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a glorious 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//console.log(storyWords)
//console.log(storyWords.join(' '));

let count = 0;
//change count value for every word that is found in the array.
storyWords.forEach(word => {
 count += 1;
})

// will itterate the array and find if the word in the array is not equal to the value of unnecessaryWord and if true will return the words that meet the condition.
storyWords = storyWords.filter( word =>{
if(word !== unnecessaryWord ){
  return word
}

})

//will return a new array with the map method and will change the value of the word.
const spellChecked = storyWords.map(word => {
if( word === misspelledWord) {
  return misspelledWord = 'beautiful';
}else{
  return word
}
})
// will find the index number of where the word is located that has the value of the variable we are comparing to.
const badWordIndex = spellChecked.findIndex(word => {
  if(word === badWord){
    return word 
  }
})
// returns a boolean value if the condition is true or false in this case false as there is at least one word with more than 10 letters that later on we changed so now is true.
const lenghtCheck = spellChecked.every(word => {
  return word.length < 10;
})
//will iterate and will find the word that has more than 10 letters.
const longWordIndex = spellChecked.filter(word => {
  word.length > 10 && console.log(word)
}
)
spellChecked[badWordIndex] = 'really';

console.log(spellChecked.join(' '))
console.log(count);
console.log(badWordIndex)
console.log(lenghtCheck) 
