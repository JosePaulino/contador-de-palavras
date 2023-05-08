function contPalavras(valor) {
  valor.replace(/(\r\n|\n|\r)/g, ' ').trim()
  var cont = valor.split(/\s+/g).length - 1

  if (cont == '1' || cont == '0') {
    document.getElementById('texto').value = cont + ' Palavra'
  } else {
    document.getElementById('texto').value = cont + ' Palavras'
  }
}

function deletePalavras() {
  document.getElementById('area-texto').value = ''

  document.getElementById('texto').value = ''
}
