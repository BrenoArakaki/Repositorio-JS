var f1 = 0, f2 = 1, total = 1;
for (i = 0; i <31 ; ++i) {
document.write(total + "<br>");
total = f1 + f2
f1 = f2
f2 = total
}