var listaJogadores = [];
var indiceEditar = -1;

function exibirTabelaJogadores() {
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = "";
  
  listaJogadores.forEach(function(jogador, indice) {
    tabelaJogadores.innerHTML += `<tr>
        <td>${jogador.nome}</td>
        <td>${jogador.gols}</td>
        <td>${jogador.assistencias}</td>
        <td>${jogador.vitorias}</td>
        <td>${jogador.empates}</td>
        <td>${jogador.derrotas}</td>
        <td>${jogador.pontos}</td>
        <td><button onclick="adicionarEvento(${indice}, 'gols')">Gol</button></td>
        <td><button onclick="adicionarEvento(${indice}, 'assistencias')">Assistência</button></td>
        <td><button onclick="adicionarEvento(${indice}, 'vitorias')">Vitória</button></td>
        <td><button onclick="adicionarEvento(${indice}, 'empates')">Empate</button></td>
        <td><button onclick="adicionarEvento(${indice}, 'derrotas')">Derrota</button></td>
        <td><button onclick="editarJogador(${indice})">Editar Nome</button></td>
        <td><button onclick="removerJogador(${indice})">Remover</button></td>
      </tr>`;
  });
}

function adicionarEvento(indice, propriedade) {
  listaJogadores[indice][propriedade]++;
  if (propriedade === 'vitorias') {
    listaJogadores[indice].pontos += 3;
  } else if (propriedade === 'empates') {
    listaJogadores[indice].pontos += 1;
  }
  exibirTabelaJogadores();
}

function exibirFormulario() {
  document.getElementById("divAdicionaJogador").style.display = "inline";
  document.getElementById("mostrarFormularioInsercao").style.display = "none";
}

function fecharFormulario() {
  document.getElementById("divAdicionaJogador").style.display = "none";
  document.getElementById("mostrarFormularioInsercao").style.display = "inline";
  document.getElementById("nomeJogador").value = "";
}

function adicionarJogador() {
  var nomeJogador = document.getElementById("nomeJogador").value;
  if (nomeJogador) {
    var novoJogador = {
      nome: nomeJogador,
      gols: 0,
      assistencias: 0,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    listaJogadores.push(novoJogador);
    exibirTabelaJogadores();
    fecharFormulario();
  } else {
    alert("Nome não informado!");
  }
}

function editarJogador(indice) {
  indiceEditar = indice;
  var nomeJogador = listaJogadores[indice].nome;
  document.getElementById("nomeJogadorSalvo").value = nomeJogador;
  document.getElementById("divEditaJogador").style.display = "inline";
}

function editarNomeJogador() {
  var novoNomeJogador = document.getElementById("nomeJogadorSalvo").value;
  if (novoNomeJogador) {
    listaJogadores[indiceEditar].nome = novoNomeJogador;
    exibirTabelaJogadores();
    fecharFormularioEdicao();
  } else {
    alert("Nome não informado");
  }
}

function removerJogador(indice) {
  listaJogadores.splice(indice, 1);
  exibirTabelaJogadores();
}

function fecharFormularioEdicao() {
  document.getElementById("divEditaJogador").style.display = "none";
  document.getElementById("nomeJogadorSalvo").value = "";
}