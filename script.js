function ConverterParaReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function ConverterParaEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmRealEuro = valorEmEuroNumerico * 6;
  console.log(valorEmRealEuro);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmRealEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

//foi colocado o símbolo do Cruzeiro apenas para teste com um outro domínio ao clicar no ícone.