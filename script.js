function contPalavras() {
  var text = document.getElementById('area-texto').value
  var contPalavras = text.split(' ').length

  document.getElementById('palavras').innerHTML =
    'Numero total de palavras: ' + contPalavras
}

function deletePalavras() {
  var excluir = document.getElementById('').value
}
