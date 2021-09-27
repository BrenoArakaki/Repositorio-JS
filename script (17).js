var i, num;

num = parseInt(window.prompt("Digite um valor: "));
while (num < 0) {
  num = parseInt(window.prompt("Digite um valor: "));
}
for (i = 1; i < 11; i++) {
  document.write("<h1>" + num + " x " + i + " = " + num * i + "<br>");
}