const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    let msg = message.body;
    if ((msg.toLowerCase() != "sim") && (msg.toLowerCase() != "não" && msg.toLowerCase() != "nao")) {
      client.sendText(message.from,
        "❌ Opção inválida, Responda *SIM* para confirmar 👍🏼 ou *NÃO* para não enviar arquivos 👎🏼"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (msg.toLowerCase() === "nao" || msg.toLowerCase() === "não") {
      dados[message.from].stage = 9;
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "✅ Ok tudo certo para abertura do seu chamado 👋🏼👋🏼\n" +
        "Digite #️⃣ para confirmar ou *️⃣  caso não queira mais abrir o chamado."
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (msg.toLowerCase() === "sim") {
      dados[message.from].stage = 10;
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "👋🏼👋🏼 Otimo vamos lá agora pode enviar 😉"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
