const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (message.body === "1") {
      dados[message.from].stage = 2;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*⚒️ ABERTURA DE CHAMADO* \n\n" +
        "Por favor informe seu RE\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === '2') {
      dados[message.from].stage = 13;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*🔍 Consultar Status de Chamado* \n\n" +
        "Informe o número do chamado\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === '3') {
      dados[message.from].stage = 14;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*☎️ Consultar Ramais* \n\n" +
        "Informe o *Nome* ou *Sobrenome* para pesquisa\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }

    if (message.body === "4") {
      dados[message.from].stage = 15;
      client.sendText(message.from, '👋🏻 Oi eu sou a *Lunna*👩🏻‍🦰\n' +
        'Assistente virtual da CTD em que posso ajudar ?\n\n' +
        'Para voltar ao menu inicial digite #️⃣'
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "5") {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*✍🏼 Críticas Sugestões ou Elogios* \n\n" +
        "💬 Sua opinião é muito importante para nós, pois através dela" +
        "poderemos estar melhorando nosso atendimento." +
        "Portanto *Críticas Construtivas* e *Sugestões de Melhorias ou novas Ideias 💭" +
        "serão muito bem vindas. 😉\n" +

        "Descreva sua opinião\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }

    if (message.from === "#" || message.from.toLowerCase() === "voltar") {
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
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      return
    }
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
  }).catch((error) => console.log(error));
}

exports.execute = execute;