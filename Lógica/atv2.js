var dados = []

function cadastrar(){

  var nome = document.getElementById("nome").value
  var email = document.getElementById("email").value
  var telefone = document.getElementById("telefone").value
  var endereco = document.getElementById("endereco").value

  if(nome == ""){
    alert("Favor preencher o campo nome")
  }else if(email == ""){
    alert("Favor preencher o campo email")
  }else if(telefone == ""){
    alert("Favor preencher o campo telefone")
  }else(endereco == ""){
    alert("Favor preencher o campo endereço")
  }

  // puxar os dados
  dados.push({
    "nome": nome,
    "email": email,
    "telefone": telefone,
    "endereco": endereco
  })
}

