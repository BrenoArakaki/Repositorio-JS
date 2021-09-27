var lado1, lado2, lado3;
lado1 = parseFloat(window.prompt("Digite o 1º valor: "));
lado2 = parseFloat(window.prompt("Digite o 2º valor: "));
lado3 = parseFloat(window.prompt("Digite o 3º valor: "));

if (lado1 * lado1 == lado2 * lado2 + lado3 * lado3) {
  document.write("<h1>É um triangulo retangulo");
}
else if (lado2 * lado2 == lado1 * lado1 + lado3 * lado3) {
  document.write("<h1>É um triangulo retangulo");
}
else if (lado3 * lado3 == lado1 * lado1 + lado2 * lado2) {
  document.write("<h1>É um triangulo retangulo");
}
else
  document.write("<h1>Não é um triangulo retangulo");