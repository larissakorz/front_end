var times = []

function cadastrar(){

    var time1 = document.getElementById("time1").value
    var pontuacao1 = document.getElementById("pontuacao1").value
    var time2 = document.getElementById("time2").value
    var pontuacao2 = document.getElementById("pontuacao2").value
    var data = document.getElementById("data").value
    var local = document.getElementById("local").value

    if(time1 == ""){
      alert("Favor informar o Time")
    }else if(pontuacao1 == ""){
      alert("Favor informar a Pontuação")
    }else if(time2 == ""){
      alert("Favor informar o Time")
    }else if(pontuacao2 == ""){
      alert("Favor informar a Pontuação")
    }else if(data == ""){
      alert("Favor preencher a data")
    }else if(local == ""){
      alert("Favor preencher o local")
    }else{

      times.push({
        "time1":time1,
        "pontuacao1":pontuacao1,
        "time2":time2,
        "pontuacao2":pontuacao2,
        "data":data,
        "local":local
      })
  
      listar()
  
      alert("Times cadastrados")

    }
}


    function listar (){
      var tabela = document.getElementById("tabela")

      for(var i=0; i<times.length; i++){

      

      var linha = tabela.insertRow(-1)

      var coluna1 = linha.insertCell(0)
      var coluna2 = linha.insertCell(1)
      var coluna3 = linha.insertCell(2)
      var coluna4 = linha.insertCell(3)
      var coluna5 = linha.insertCell(4)
      var coluna6 = linha.insertCell(5)

      coluna1.innerHTML = times[i].time1
      coluna2.innerHTML = times[i].pontuacao1
      coluna3.innerHTML = times[i].time2
      coluna4.innerHTML = times[i].pontuacao2
      coluna5.innerHTML = times[i].data
      coluna6.innerHTML = times[i].local
    }
  }