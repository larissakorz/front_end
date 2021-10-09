// Vetor
let alunos = [];

// índice do vetor para poder alterar ou editar o alunos
let indiceVetor;

// Cadastrar
const cadastrar = () => {

  // Obter dados
  let nome = document.getElementById("nome").value;
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let alerta = document.getElementById("alerta");
  
  // Validar
  const situacao = validar(nome, nota1, nota2);

  // Exibir o texto da validação
  alerta.innerHTML = situacao.mensagem;

  // Remover possíveis classes do alerta
  alerta.classList.remove('alert-success');
  alerta.classList.remove('alert-danger');

  // Custominar a cor do alerta 
  if(situacao.status == "ok"){
    alerta.classList.add('alert-success');

    // Criar um objeto
  let obj = {
    "nome":nome,
    "nota1":nota1,
    "nota2":nota2,
    "media":media(nota1, nota2),
    "situacao":media(nota1, nota2) >= 7 ? "Aprovado(a)" : "Reprovado(a)"
  }

  // Cadastrar no vetor
  alunos.push(obj);

  // Limpar campos
  reset();

  // Listar
  listar();

  }else{
    alerta.classList.add('alert-danger');
  }

}

// Validar campos
const validar = (nome, nota1, nota2) => {

  let situacao = {"mensagem":"", "status":"ok"};

  if(nome == ""){
    situacao.mensagem = "O campo nome deve ser preenchido";
    situacao.status = "falha"
  }else if(nota1 == ""){
    situacao.mensagem = "O campo primeira nota deve ser preenchido";
    situacao.status = "falha"
  }else if(nota2 == ""){
    situacao.mensagem = "O campo segunda nota deve ser preenchido";
    situacao.status = "falha"
  }else{
    situacao.mensagem = "Cadastro efetuado com sucesso";
    situacao.status = "ok"
  }

  // Retorno
  return situacao;
}

// Realizar a media
const media = (nota1, nota2) => {

  let calculo = (parseFloat(nota1) + parseFloat(nota2)) / 2;
  return calculo;

}

// Limpar campos e deixar o curso no campo nome
const reset = () => {

  // Limpar campos
  document.getElementById("nome").value = "",
  document.getElementById("nota1").value = "",
  document.getElementById("nota2").value = "",

  // Cursor no campo nome
  document.getElementById("nome").focus();

}

// Listar dados
const listar = () => {

  let tabela = document.getElementById("tabela");

  // Limpar tabela
  tabela.innerHTML = "";

  // Laco
  for(let i = 0; i < alunos.length; i++){

    // Criar linha
    let linha = tabela.insertRow(-1);

    // Criar colunas (<td>)
    let colunaCodigo = linha.insertCell(0);
    let colunaNome = linha.insertCell(1);
    let colunaNota1 = linha.insertCell(2);
    let colunaNota2 = linha.insertCell(3);
    let colunaMedia = linha.insertCell(4);
    let colunaSituacao = linha.insertCell(5);
    let colunaEditar = linha.insertCell(6);

    // Valores das colunas
    colunaCodigo.innerHTML = i+1;
    colunaNome.innerHTML = alunos[i].nome;
    colunaNota1.innerHTML = alunos[i].nota1;
    colunaNota2.innerHTML = alunos[i].nota2;
    colunaMedia.innerHTML = alunos[i].media;
    colunaSituacao.innerHTML = alunos[i].situacao;
    colunaEditar.innerHTML = "<button class='btn btn-info' onclick='selecionarAluno("+i+")'>Editar</button>";

  }
}

// Selecionar aluno
const selecionarAluno = (indice) => {

  // Limpar o alert
  document.getElementById("alerta").innerHTML = "";
  document.getElementById("alerta").classList.remove("alert-success");
  document.getElementById("alerta").classList.remove("alert-danger");

  // Listar dados
  document.getElementById("nome").value = alunos[indice].nome;
  document.getElementById("nota1").value = alunos[indice].nota1;
  document.getElementById("nota2").value = alunos[indice].nota2;

  // Obter o índice do aluno
  indiceVetor = indice;

  // Ocultar botão cadastrar
  document.getElementById("btnCadastrar").style.display = "none";

  // Exibir demais botões
  document.getElementById("btnEditar").style.display = "inline-block";
  document.getElementById("btnRemover").style.display = "inline-block";
  document.getElementById("btnCancelar").style.display = "inline-block";

}

const cancelar = () => {

  // Limpar campos
  reset();

  // Exibir o botão cadastrar
  document.getElementById("btnCadastrar").style.display = "inline-block";

  // Exibir o botão cadastrar
  document.getElementById("btnEditar").style.display = "none";
  document.getElementById("btnRemover").style.display = "none";
  document.getElementById("btnCancelar").style.display = "none";

}

// Remover
const remover = () => {

  // Remover do vetor
  alunos.splice(indiceVetor, 1);

  // Limpar campos e restaurar botoes
  cancelar();

  // Atualizar tabela
  listar();

  // Alerta
  document.getElementById("alerta").innerHTML = "Aluno removido com sucesso!";
  document.getElementById("alerta").classList.add("alert-success");
}

const editar = () => {

  // Obter dados
  let nome = document.getElementById("nome").value;
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let alerta = document.getElementById("alerta");
  
  // Validar
  const situacao = validar(nome, nota1, nota2);

  // Exibir o texto da validação
  alerta.innerHTML = situacao.mensagem;

  // Remover possíveis classes do alerta
  alerta.classList.remove('alert-success');
  alerta.classList.remove('alert-danger');

  // Custominar a cor do alerta 
  if(situacao.status == "ok"){
    alerta.classList.add('alert-success');

    // Criar um objeto
  let obj = {
    "nome":nome,
    "nota1":nota1,
    "nota2":nota2,
    "media":media(nota1, nota2),
    "situacao":media(nota1, nota2) >= 7 ? "Aprovado(a)" : "Reprovado(a)"
  }

  // Cadastrar no vetor
  alunos[indiceVetor] = obj;

  // Limpar campos
  reset();

  // Listar
  listar();

}else{
  alerta.classList.add('alert-danger');
}

}

