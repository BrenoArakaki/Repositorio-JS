var i, j;
document.write("<table border>");
for (j = 1; j < 21; j++) {
document.write("<tr>")
for (i = 1; i < 11; i++) {
  document.write("<td>" + j + " x " + i + " = " + j * i + "</td>");
}
document.write("</tr>")
}