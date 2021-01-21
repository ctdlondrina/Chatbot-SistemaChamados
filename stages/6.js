const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    client.sendText(message.from,
      "*Descrição da Solicitação* \n\n"
      + message.body + "\n\n" +
      "Por favor revise o texto, estando tudo certo digite *SIM* " +
      "Para confirmar 👍🏼,\n ou Caso queira refazer o texto digite *DELETAR* 👎🏼"
    ).then((result) => { }).catch((error) => { console.log(error) });
    dados[message.from].stage = 7;
    dados[message.from].itens.push(message.body);
    console.log("Estagio " + dados[message.from].stage);
    console.dir(`Dados:  ${dados[message.from].itens}`);
    return
  }).catch((error) => console.log(error));
}

exports.execute = execute;
