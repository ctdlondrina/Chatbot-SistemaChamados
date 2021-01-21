const dados = require("../dados");
const index = require('../index');

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
      if (message.body.toLowerCase() === "voltar") {
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
    }
  }).catch((error) => { console.log(error) });
}

exports.execute = execute;
