var peso, altura, imc;
     peso = parseFloat(window.prompt("Digite o seu peso: "));
     altura = parseFloat(window.prompt("Digite a sua altura: "));

     imc = peso / (altura * altura)

      if (imc < 20)
      document.write("<h1>" + imc + ": Abaixo do peso");

      else if (imc < 25)
      document.write("<h1>" + imc + ": Peso ideal");

      else if (imc >= 25)
      document.write("<h1>" + imc + ": Acima do peso");