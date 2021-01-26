var date = new Date();
document.write("current date: "+date);
var a = date.getHours();
date.setHours(a-1);
document.write("<br>1 hour ahead, it was: "+date);