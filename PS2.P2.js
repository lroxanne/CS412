// Generator function to emit each word of a sentence in turn
const wordGenerator = function* (sentence) {
    const words = sentence.split(' ');
    for (const word of words) {
      yield word;
    }
  }
  
  const sentence = "All I know is something like a bird within her sang";
  
  const wordGen = wordGenerator(sentence);
  
  for (const word of wordGen) {
    console.log(word);
  }
  
  