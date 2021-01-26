var date = new Date();
document.write("Current date: "+date);
var a = date.getTime();
document.write("<br>Elapsed milliseconds since January 1, 1970: "+a);
var b = a/(1000*60*60);
document.write("<br>Elapsed minutes since January 1, 1970: "+b);