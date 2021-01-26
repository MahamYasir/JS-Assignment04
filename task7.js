var text = "The quick brown fox jumps over the lazy dog";
document.write("Text: "+text);
var updatedText =  text.toLowerCase();
var count = (updatedText.match(/the/g).length);
console.log(count);
document.write("<br>There are "+count+" occurrence(s) of the word 'the'");