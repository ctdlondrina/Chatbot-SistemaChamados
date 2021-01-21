const dados = require("../dados");
const index = require('../index');
const axios = require('axios');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (message.isGroupMsg === false) {
      if (message.body.toLowerCase() === "sair") {
        dados[message.from].stage = 0;
        while (dados[message.from].itens.length > 0) {
          dados[message.from].itens.pop();
        }
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "🚫 A Solicitação foi Cancelada \n" +
          "Obrigado por utilizar nosso atendimento Virtual."
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
      if (message.body === "#" || message.body.toLowerCase() === "voltar") {
        dados[message.from].stage = 1;
        dados[message.from].itens.splice(2, 6);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          'Seja bem vindo ao sistema de 🛠️ Suporte de Informática da CTD 🖥️ \n' +
          `Por favor *escolha uma opção:*\n\n` +
          `*MENU PRINCIPAL*\n` +
          `⚒️ *1* - Abertura de Chamado. \n` +
          `🔍 *2* - Consultar Chamado. \n` +
          `☎️ *3* - Consultar Ramais. \n` +
          `👩🏻‍💼 *4* - Falar com a *Lunna*. \n` +
          `✍🏼 *5* - Críticas Sugestões ou Elogios. \n\n\n` +

          `A qualquer momento durante a navegação pelos Menus, envie a palavra *VOLTAR* \n` +
          `para retornar ao *Menu Anterior* e envie *SAIR* para finalizar o atendimento`
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
      if (isNaN(message.body) == true) {
        client.sendText(message.from,
          '❌ *RE inválido*\ndeve conter apenas números!'
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
      else {
        axios.get(`http://localhost:3000/getUsuario?id=${message.body}`
        ).then(function (response) {
          if (response.status === 200) {
            let result = response.data;
            if (result.length === 1) {
              client.sendText(message.from,
                '*RE:* ' + result[0].RE + '\n' +
                '*Nome:* ' + result[0].NOME + '\n' +
                '*Ramal:* ' + result[0].RAMAL + '\n' +
                '*e-mail:* ' + result[0].EMAIL + '\n' +
                '*Setor:* ' + result[0].SETOR + '\n\n' +
                'Esta correto ? \n Digite #️⃣ para *confirmar* ou *️⃣  para *informar outro* RE'
              ).then((result) => { }).catch((error) => { console.log(error) });
              dados[message.from].stage = 3;
              dados[message.from].itens.push(result[0].RE, result[0].NOME, result[0].RAMAL, result[0].EMAIL, result[0].SETOR);
              console.log("Estagio " + dados[message.from].stage);
              console.dir("Dados:  " + dados[message.from].itens);
              return
            }
            if (result === 0) {
              client.sendText(message.from,
                '❌ RE *não existe*\nPor favor verifique e tente novamente!'
              ).then((result) => { }).catch((error) => { console.log(error) });
              return
            }
            if (result === "sqlerror") {
              client.sendText(message.from,
                '😟\n' +
                'Ocorreu um erro ao tentar fazer a\n' +
                'consulta no banco de dados.\n\n' +
                'Tente novamente em instantes'
              ).then((result) => { }).catch((error) => { console.log(error) });
              return
            }
          }
        }).catch((error) => {
          client.sendText(message.from,
            '❌ Banco de dados Oracle esta indisponivel\n' +
            'Tente novamente em alguns instantes.'
          ).then((result) => { }).catch((error) => { console.log(error) })
        });
      }
    }
  }).catch((error) => console.log(error));
}
exports.execute = execute;
