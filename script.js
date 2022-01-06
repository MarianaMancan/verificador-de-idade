function verificar() {
  var data = new Date() //data atual

  var ano = data.getFullYear() //ano atual

  var fano = document.getElementById('txtano') // ano digitado pelo usuario

  var res = document.querySelector('div#res') // transformar res em variavel.

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    //Para uma string vazia, length é 0. Se o valor digitado pelo usuario(fano)transformado em number(Number) for maior que o ano atual.

    window.alert('ERRO!.Verifique e digite novamente.')
  } else {
    var fsex = document.getElementsByName('radsex') //existe a opção [0] e [1].
    var idade = ano - Number(fano.value)

    var genero = ' '
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade > 0 && idade < 3) {
        //bebê
        img.setAttribute('src', 'bebeM.png')
      } else if (idade < 13) {
        //criança
        img.setAttribute('src', 'criançaM.png')
      } else if (idade < 25) {
        //jovem
        img.setAttribute('src', 'jovemM.png')
      } else if (idade < 60) {
        //adulto
        img.setAttribute('src', 'adultoM.png')
      } else {
        //idoso
        img.setAttribute('src', 'idosoM.png')
      }
    } else {
      genero = 'Mulher'
      if (idade > 0 && idade < 3) {
        //bebê
        img.setAttribute('src', 'bebeF.png')
      } else if (idade < 13) {
        //criança
        img.setAttribute('src', 'criançaF.png')
      } else if (idade < 25) {
        //jovem
        img.setAttribute('src', 'jovemF.png')
      } else if (idade < 60) {
        //adulto
        img.setAttribute('src', 'adultoF.png')
      } else {
        //idoso
        img.setAttribute('src', 'idosoF.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
  }
}
