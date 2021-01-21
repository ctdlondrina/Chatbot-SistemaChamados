const dados = require("../dados");
const index = require('../index');
const fs = require('fs');

async function execute(message) {
  index.clientPromisse.then(async (client) => {
    let msg = message.body;
    if ((message.type === 'chat') && (msg.toLowerCase() != 'deletar') && (msg.length >= 1 && msg != '#') && (msg.length = 2 && msg.toLowerCase() != 'ok')) {
      client.sendText(message.from,
        "❌ Opção inválida ... Responda:\n" +
        "#️⃣ Para enviar mais arquivos\n" +
        "ou 🆗 Para concluir o envio de Arquivos\n" +
        "ou *DELETAR* Caso queira deletar o arquivo enviado"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.type != 'chat') {
      client.sendText(message.from, '🚫 *ARQUIVO NÃO RECEBIDO* 🚫\n' +
        'Para anexar outro arquivo ao chamado é necessario confirmar digitando #️⃣\n' +
        'conforme informado na mensagem anterior. Para concluir o envio de Arquivos digite 🆗'
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }

    if ((message.type === 'chat') && msg.toLowerCase() === "deletar") {
      let file = dados[message.from].midias.slice(-1).toString();
      try {
        fs.unlinkSync(`./midias_recebidas/${file}`);

        client.reply(message.from, "❌ O arquivo foi deletado ! 👆🏼👆🏼", dados[message.from].messageId.slice(-1).toString()
        ).then((result) => { }).catch((error) => { console.log(error) });
        client.sendText(message.from,
          "Para enviar outro arquivo digite #️⃣ \n" +
          "Para concluir o envio de Arquivos digite 🆗"
        ).then((result) => { }).catch((error) => { console.log(error) });
        dados[message.from].messageId.pop();
        dados[message.from].midias.pop();
        console.dir("Midias: " + dados[message.from].midias);
        return
      } catch (error) {
        console.log('Erro ao deletar o arquivo', error);
        client.sendText(message.from, "Erro ao tentar deletar o arquivo\n\n" + error + "\n"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
    }
    if ((message.type === 'chat') && msg.length >= 1 && msg === "#") {
      client.sendText(message.from,
        "👋🏼👋🏼 Otimo vamos lá agora pode enviar mais 😉"
      ).then((result) => { }).catch((error) => { console.log(error) });
      dados[message.from].stage = 10;
      return
    }
    if ((message.type === 'chat') && (msg.length = 2 && msg.toLowerCase() === "ok")) {
      dados[message.from].stage = 12;
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      console.dir("Midias: " + dados[message.from].midias);
      client.sendText(message.from,
        "✅ Ok tudo certo para abertura do seu chamado 👋🏼👋🏼\n" +
        "Digite #️⃣ para confirmar ou *️⃣  caso não queira mais abrir o chamado."
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
