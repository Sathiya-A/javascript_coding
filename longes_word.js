const longest_Word = (sentence) => {
   let words = sentence.split(' ')


   let longest_word = ''
   for (let word of words) {
      if (word.length > longest_word.length) {

         longest_word = word
      }
   }
   return longest_word
}
module.exports = longest_Word;

