const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (dados[message.from].itens[8] === '1') {
      if (message.body.toLowerCase() === 'voltar') {
        dados[message.from].stage = 5;
        dados[message.from].itens.splice(9, 10);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*☎️ TELEFONIA* \n\n" +
          "*1* - Headset\n" +
          "*2* - Gravador\n" +
          "*3* - Ramal\n" +
          "*4* - URA\n" +
          "*5* - WDE\n" +
          "*6* - CCPulse/Gax\n" +
          "*7* - Tarifação\n" +
          "*8* - Paralela\n" +
          "*9* - Genesys Administrator\n" +
          "*10* - Grupo de Atendimento\n" +
          "*11* - Relatórios\n" +
          "*12* - Script de Avaliação\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
    }
    if (dados[message.from].itens[8] === '2') {
      if (message.body.toLowerCase() === 'voltar') {
        dados[message.from].stage = 5;
        dados[message.from].itens.pop();
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*🖥️ PROBLEMAS EM PC* \n\n" +
          "*1* - Lentidão\n" +
          "*2* - Travamento\n" +
          "*3* - Erro na inicialização\n" +
          "*4* - Periféricos Mouse Teclado Monitor\n" +
          "*5* - Dificuldade em Aplicativo\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
    }
    if (dados[message.from].itens[8] === '3') {
      if (message.body.toLowerCase() === 'voltar') {
        dados[message.from].stage = 5;
        dados[message.from].itens.pop();
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*📠 IMPRESSORAS* \n\n" +
          "*1* - Troca de Toner\n" +
          "*2* - Problemas na impressão\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
    }
    if (dados[message.from].itens[8] === '5') {
      if (message.body.toLowerCase() === 'voltar') {
        dados[message.from].stage = 5;
        dados[message.from].itens.pop();
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*📧 e-MAIL* \n\n" +
          "*1* - Criação de e-mail\n" +
          "*2* - Alteração de assinatura\n" +
          "*3* - Configuração Thunderbird\n" +
          "*4* - Veem (backup email)\n" +
          "*5* - Problemas para Acessar e-mails\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣"
        ).then((result) => { }).catch((error) => { console.log(error) });
        return
      }
    }
    if ((dados[message.from].itens[8] === '4') ||
      (dados[message.from].itens[8] === '6') ||
      (dados[message.from].itens[8] === '7') ||
      (dados[message.from].itens[8] === '8') ||
      (dados[message.from].itens[8] === '9') ||
      dados[message.from].itens[8] === '10') {
      if (message.body.toLowerCase() === 'voltar') {
        dados[message.from].stage = 4;
        dados[message.from].itens.pop();
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
    if (message.body === "#") {
      dados[message.from].stage = 1;
      dados[message.from].itens.splice(2, 9);
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
    else {
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
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
