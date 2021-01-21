const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (message.body === "1") {
      dados[message.from].stage = 5;
      dados[message.from].itens.push(message.body);
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
    if (message.body === '2') {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
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
    if (message.body === '3') {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
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
    if (message.body === '4') {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*💿 INSTALAÇÃO DE SOFTWARES* \n\n" +
        "Informe qual o nome do Software que deseja ?\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "5") {
      dados[message.from].stage = 6;
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
    if (message.body === "6") {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*🔑 ALTERAÇÃO DE SENHA* \n\n" +
        "Descreva o problema e informe qual senha precisa resetar ?\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "7") {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "*🔏 INCLUSÃO/BLOQUEIO DE ACESSO* \n\n" +
        "Informe qual o sistema ou diretorio da rede deseja adicionar/bloquear acesso" +
        "e o nome/login do Colaborador que terá a alteração.\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "8") {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "🎓 *PLATAFORMA EAD Moodle*.\n\n" +
        "Descreva a solicitação\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "9") {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "🔒 DIFICULDADE DE ACESSO A SISTEMAS.\n\n" +
        "Descreva a solicitação\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "10") {
      dados[message.from].stage = 6;
      dados[message.from].itens.push(message.body);
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "🔥 INFORMAR ALGUMA INTERCORRÊNCIA.\n\n" +
        "Descreva o problema\n\n" +
        "Voltar ao *Menu Principal* digite #️⃣"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if ((message.body === "#") || (message.body.toLowerCase() === "voltar")) {
      dados[message.from].stage = 1;
      dados[message.from].itens.splice(2, 6);
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