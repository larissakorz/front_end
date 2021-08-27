// Vetor
var produtos = []


// Função de cadastro
function cadastrar(){

  // Capturar o valor dos campos
  var nome = document.getElementById("nome").value
  var valor = document.getElementById("valor").value
  var marca = document.getElementById("marca").value

  if(nome == ""){
    alert("Favor preencher o nome do produto")
  }else if(valor == ""){
    alert("Favor preencher o valor do produto")
  }else if(marca == ""){
    alert("Favor preencher a marca do produto")
  }else{

    //push - puxar os produtos
    produtos.push({
      "nome": nome,
      "valor":valor,
      "marca":marca
    })

    limparCampos()

    listar()

    alert("Produto cadastro com sucesso")
  }
}

// Função para limpar campos
function limparCampos(){

    document.getElementById("nome").value = ""
    document.getElementById("valor").value = ""
    document.getElementById("marca").value = ""

    document.getElementById("nome").focus()

}

// Função de listagem
function listar(){
    
  // Obter id tabela
  var tabela = document.getElementById("tabela")

  //Limpar tabela
  tabela.innerHTML = ""

  //Laço
  for(var i=0; i<produtos.length; i++){

      // Linha (tr)
      var linha = tabela.insertRow(-1)

      // Coluna
      var coluna1 = linha.insertCell(0)
      var coluna2 = linha.insertCell(1)
      var coluna3 = linha.insertCell(2)
      var coluna4 = linha.insertCell(3)
      var coluna5 = linha.insertCell(4)

      // Valores das celulas
      coluna1.innerHTML = i+1
      coluna2.innerHTML = produtos[i].nome
      coluna3.innerHTML = produtos[i].valor
      coluna4.innerHTML = produtos[i].marca
      coluna5.innerHTML = "<button onClick='remover("+i+")'>Remover</button>"
}
}

// Função para remover
function remover(indice){

    //Remover produto
    produtos.splice(indice, 1)

    // Atualizar tabela
    listar()

    // Mensagem
    alert("Produto removido com sucesso")
}