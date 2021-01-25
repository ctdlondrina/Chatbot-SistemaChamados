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
        "Por favor informe seu *RE*\n" +
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
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from, '👋🏻 Oi eu sou a *Lunna* 👩🏻‍🦰\n' +
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
        "💬 Sua opinião é muito importante. \n" +
        "Através dela poderemos melhorar nosso atendimento." +
        "Portanto, *Críticas Construtivas* ou *Sugestões de Melhorias ou novas Ideias* 💡" +
        "são muito bem vindas. 😉\n\n" +

        "Descreva sua Sugestão\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }

    if (message.body === "#" || message.body.toLowerCase() === "voltar") {
      client.sendText(message.from,
        '🙄 Você ja esta no *Menu Principal*\n'
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
    function checaOpcao(str, x) {
      if ((str >= 1) && (str <= x)) {
        return true;
      } else {
        return false;
      }
    }
    if ((checaOpcao(message.body, 5) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
      client.sendText(message.from,
        "❌ Opção inválida"
      ).then((result) => { }).catch((error) => { console.log(error) });
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;