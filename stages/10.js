const dados = require("../dados");
const index = require('../index');
const fs = require('fs');
const mime = require('mime-types');

async function execute(message) {
  index.clientPromisse.then(async (client) => {
    if ((message.type === "chat") && (message.body.length >= 1) && (message.body === "!")) {
      dados[message.from].stage = 9;
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      console.dir("Midias: " + dados[message.from].midias);
      client.sendText(message.from,
        "✅ Ok tudo certo para abertura do seu chamado 👋🏼👋🏼\n" +
        "Digite #️⃣ para confirmar ou *️⃣  caso não queira mais abrir o chamado."
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.type === "chat") {
      client.sendText(message.from,
        "❌ Ops!! nesta fase do atendimento *só recebo arquivos*\n" +
        "Por favor enviar um arquivo. \n\n" +
        "Caso tenha desistido de anexar arquivos digite ❗"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.isMedia === true || message.isMMS === true) {

      let msgId = await message.id.toString();
      dados[message.from].messageId.push(msgId);
      const buffer = await client.decryptFile(message);
      var telefone = ((String(`${message.from}`).split('@')[0]).substr(2));
      let date_ob = new Date();
      let date = ("0" + date_ob.getDate()).slice(-2);
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let year = date_ob.getFullYear();
      let miliseconds = date_ob.getMilliseconds();
      const fileName = `${telefone}-${year}${month}${date}-${miliseconds}`;
      const file = `${fileName}.${mime.extension(message.mimetype)}`;
      try {
        fs.writeFileSync(`./midias_recebidas/${file}`, buffer);
        dados[message.from].midias.push(file);
        dados[message.from].stage = 11;
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Midias: " + dados[message.from].midias);
        client.reply(message.from,
          "Arquivo de Midia foi recebido com Sucesso !! ✅ \n" +
          "Caso queira deletar o arquivo enviado digite *DELETAR* \n" +
          "Para enviar mais arquivos digite #️⃣ \n" +
          "Para concluir o envio de Arquivos digite 🆗",
          message.id.toString()
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      } catch (error) {
        console.log(error);
      }
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
