var input = prompt("Enter a number to find mean of it's all digits");
var a = input.split("");
var sum = 0;
for(i=0;i<a.length;i++){
	sum+=parseInt(a[i]);
}
var mean = sum/a.length;
document.write("Input= "+input);
document.write("<br>Mean= "+mean);