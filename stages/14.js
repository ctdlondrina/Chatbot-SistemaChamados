const dados = require("../dados");
const index = require('../index');
const con = require('../conexao');
const request = require('request');

async function execute(message) {
  index.clientPromisse.then(async (client) => {
    if ((message.body === '#') || (message.body.toLowerCase() === 'voltar')) {
      dados[message.from].stage = 1;
      dados[message.from].itens.pop();
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
    else
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
      else {
        con.getUsuario2(`SELECT * FROM agenda WHERE UPPER(nome) LIKE UPPER('%${message.body}%')`, function (err, result) {
          if (!err) {
            if (result === 0) {
              client.sendText(message.from,
                'Não foram encontrados registros para a pesquisa solicitada!'
              ).then((result) => { }).catch((error) => { console.log(error) });
              return
            }
            else {
              for (let i = 0; i < result.length; i++) {
                (async () => {
                  request(`http://10.0.2.15:81/ramais/img/cracha/${result[i].RE}.jpg`, (error, response) => {
                    if (error) {
                      console.log(error);
                    }
                    if (response.statusCode === 200) {
                      client.sendImage(
                        message.from,
                        `http://10.0.2.15:81/ramais/img/cracha/${result[i].RE}.jpg`,
                        'image-name',
                        `${result[i].NOME}\n` +
                        `Ramal: ${result[i].RAMAL}\n` +
                        `Setor: ${result[i].SETOR}\n` +
                        `R.E.: ${result[i].RE}\n` +
                        `E-mail: ${result[i].EMAIL}`
                      ).then((result) => { }).catch((erro) => {
                        console.error('Error when sending: ', erro);
                      });
                    }
                    if (response.statusCode === 404) {
                      client.sendImage(
                        message.from,
                        `http://10.0.2.15:81/ramais/img/cracha/semFoto.jpeg`,
                        'image-name',
                        `${result[i].NOME}\n` +
                        `Ramal: ${result[i].RAMAL}\n` +
                        `Setor: ${result[i].SETOR}\n` +
                        `R.E.: ${result[i].RE}\n` +
                        `E-mail: ${result[i].EMAIL}`
                      ).then((result) => { }).catch((erro) => {
                        console.error('Error when sending: ', erro);
                      });
                    }
                  })
                })();
              }
            }
          }
        });
      }
  }).catch((error) => { console.log(error) });
}

exports.execute = execute;
