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
      if ((message.body.length >= 1) && ((message.body != "#") && (message.body != "*"))) {
        client.sendText(message.from, "❌ Opção inválida\nResponda #️⃣ para confirmar ou *️⃣ para alterar"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
      if (message.body === "*") {
        dados[message.from].stage = 2;
        dados[message.from].itens.splice(2, 6);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from, "Por favor redigite seu numero de RE"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
      if (message.body === "#") {
        dados[message.from].stage = 4;
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          `⚒️ *ABERTURA DE CHAMADO* \n\n` +
          `☎️ *1* - Telefonia. \n` +
          `🖥️ *2* - Problemas no PC\n` +
          `📠 *3* - Problemas com Impressoras.\n` +
          `💿 *4* - Instalação de Softwares.\n` +
          `📧 *5* - e-mail. \n` +
          `🔑 *6* - Alteração de Senhas. \n` +
          `🔏 *7* - Inclusão/Bloqueio de Acessos. \n` +
          `🎓 *8* - Plataforma de EAD Moodle. \n` +
          `🔒 *9* - Dificuldade de Acesso a Sistemas. \n` +
          `🔥 *10* - Informar alguma Intercorrência. \n\n` +

          `Voltar ao *Menu Principal* digite #️⃣`
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
