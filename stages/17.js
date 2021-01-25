const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (message.isGroupMsg === false) {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      client.sendText(message.from,
        "Agora faça a descrição da solicitação. \n" +
        "Procure ser bem objetivo e direto no pedido.🎯"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
  }).catch((error) => { console.log(error) });
}

exports.execute = execute;