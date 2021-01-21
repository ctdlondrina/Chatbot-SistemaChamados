const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    let msg = message.body;
    if ((msg.toLowerCase() != "sim") && (msg.toLowerCase() != "deletar")) {
      client.sendText(message.from,
        "❌ Opção inválida, Responda *SIM* para confirmar 👍🏼 ou *DELETAR* para alterar 👎🏼"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (msg.toLowerCase() === "deletar") {
      dados[message.from].stage = 6;
      dados[message.from].itens.pop();
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "Faça a descrição da sua Solicitação novamente"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (msg.toLowerCase() === "sim") {
      dados[message.from].stage = 8;
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "Para facilitar o atendimento, você pode nos enviar arquivos de midias " +
        "como fotos  📷  e videos 🎞️\n Alem de documentos nos formatos PDF 🧾 Word 📄 ou Excel 📊 \n" +
        "Pode até mesmo *Gravar um Audio* explicando sua necessidade.\n\n" +
        "É simples e pratico 🙂 \n" +
        "Você deseja enviar algum arquivo neste chamado ? \n" +
        "Responda *SIM* 👍🏼 ou *NÂO* 👎🏼 \n\n" +
        "Ahh só lembrando que a função do arquivo é nos ajudar a entender melhor o problema.\n" +
        "*Exemplo:* Uma foto da tela com uma mensagem de erro ja nos ajuda bastante 😉"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
