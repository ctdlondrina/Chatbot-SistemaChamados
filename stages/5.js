const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (dados[message.from].itens[8] === '1') {
      if (message.body === '1') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*HEADSET* \n\n" +
          "*1* - Mau Contato. \n" +
          "*2* - Quebrado. \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣\n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR*\n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '2') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*GRAVADOR*\n\n" +
          "*1* - Restore de Gravação. \n" +
          "*2* - Solicitação de Acesso.\n" +
          "*3* - Inclusão Grupo Controle Gravação de Telas \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '3') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*RAMAL*\n\n" +
          "*1* - Liberação de Privilégio. \n" +
          "*2* - Criação de Ramal.\n" +
          "*3* - Mudança de Local \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '4') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*URA*\n\n" +
          "*1* - Criação. \n" +
          "*2* - Alteração.\n" +
          "*3* - Programação de Mensagem de Feriado \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '5') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*WDE*\n\n" +
          "*1* - Criação de Novo Login. \n" +
          "*2* - Mudança de Projeto.\n" +
          "*3* - Instalação em Maquina \n" +
          "*4* - Problemas \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '6') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*CCPULSE/GAX*\n\n" +
          "*1* - Instalação em Maquina. \n" +
          "*2* - Liberação de Acesso.\n" +
          "*3* - Configuração \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '7') {
        dados[message.from].stage = 7;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*TARIFAÇÃO*\n\n" +
          "*Descrição da Solicitação* \n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '8') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*PARALELA*\n\n" +
          "*1* - Solicitação. \n" +
          "*2* - Troca/Defeito.\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '9') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*GENESYS ADMINISTRATOR*\n\n" +
          "*1* - Liberação de Acesso. \n" +
          "*2* - Solicitação de Privilégio.\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '10') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*GRUPO DE ATENDIMENTO*\n\n" +
          "*1* - Criação. \n" +
          "*2* - Alteração.\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '11') {
        dados[message.from].stage = 7;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*RELATÓRIOS*\n\n" +
          "*Descrição da Solicitação* \n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '12') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        client.sendText(message.from,
          "*SCRIPT DE AVALIAÇÃO*\n\n" +
          "*1* - Cadastro de Usuario. \n" +
          "*2* - Liberação de Acesso.\n" +
          "*3* - Configuração \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;