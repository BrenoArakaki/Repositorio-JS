var p1, p2, media;
p1 = parseFloat(window.prompt("Digite a nota da primeira prova: "));
p2 = parseFloat(window.prompt("Digite a nota da segunda prova: "));

media = (p1 + p2 * 2) / 3

if (media >= 6)
  document.write("<h1>" + media + ": Você foi aprovado");

else
  document.write("<h1>" + media + ": Você foi reprovado");