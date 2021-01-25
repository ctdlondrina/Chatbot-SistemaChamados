const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
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
    if (message.body === "#") {
      dados[message.from].stage = 1;
      dados[message.from].itens.splice(2, 7);
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

    if (dados[message.from].itens[8] === '1') {
      if (message.body === '1') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*HEADSET* \n\n" +
          "*1* - Mau Contato. \n" +
          "*2* - Quebrado. \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣\n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR*\n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '2') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*GRAVADOR*\n\n" +
          "*1* - Restore de Gravação. \n" +
          "*2* - Solicitação de Acesso.\n" +
          "*3* - Inclusão Grupo Controle Gravação de Telas \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '3') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*RAMAL*\n\n" +
          "*1* - Liberação de Privilégio. \n" +
          "*2* - Criação de Ramal.\n" +
          "*3* - Mudança de Local \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '4') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*URA*\n\n" +
          "*1* - Criação. \n" +
          "*2* - Alteração.\n" +
          "*3* - Programação de Mensagem de Feriado \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '5') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*WDE*\n\n" +
          "*1* - Criação de Novo Login. \n" +
          "*2* - Mudança de Projeto.\n" +
          "*3* - Instalação em Maquina \n" +
          "*4* - Problemas \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '6') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*CCPULSE/GAX*\n\n" +
          "*1* - Instalação em Maquina. \n" +
          "*2* - Liberação de Acesso.\n" +
          "*3* - Configuração \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '7') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*TARIFAÇÃO*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Procure ser objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '8') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*PARALELA*\n\n" +
          "*1* - Solicitação. \n" +
          "*2* - Troca/Defeito.\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '9') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*GENESYS ADMINISTRATOR*\n\n" +
          "*1* - Liberação de Acesso. \n" +
          "*2* - Solicitação de Privilégio.\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '10') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*GRUPO DE ATENDIMENTO*\n\n" +
          "*1* - Criação. \n" +
          "*2* - Alteração.\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '11') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*RELATÓRIOS*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Procure ser objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '12') {
        dados[message.from].stage = 16;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*SCRIPT DE AVALIAÇÃO*\n\n" +
          "*1* - Cadastro de Usuario. \n" +
          "*2* - Liberação de Acesso.\n" +
          "*3* - Configuração \n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if ((checaOpcao(message.body, 12) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
        client.sendText(message.from,
          "❌ Opção inválida"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
    }
    if (dados[message.from].itens[8] === '2') {
      if (message.body === '1') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*🐌 LENTIDÃO*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '2') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*❄️ TRAVAMENTO*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '3') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*❌ ERRO NA INICIALIZAÇÃO*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '4') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*🖱️ PERIFÉRICOS ⌨️*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '5') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*📀 DIFICULDADES EM APLICATIVOS*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if ((checaOpcao(message.body, 5) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
        client.sendText(message.from,
          "❌ Opção inválida"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
    }
    if (dados[message.from].itens[8] === '3') {
      if (message.body === '1') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*TROCA DE TONER*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '2') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*PROBLEMAS NA IMPRESSÃO*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if ((checaOpcao(message.body, 2) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
        client.sendText(message.from,
          "❌ Opção inválida"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
    }
    if (dados[message.from].itens[8] === '5') {
      if (message.body === '1') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*CRIAÇÃO DE e-mail*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '2') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*ALTERAÇÃO DE ASSINATURA*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '3') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*CONFIGURAÇÃO THUNDERBIRD*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '4') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*BACKUP DE e-MAIL*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if (message.body === '5') {
        dados[message.from].stage = 6;
        dados[message.from].itens.push(message.body);
        console.log("Estagio " + dados[message.from].stage);
        console.dir("Dados:  " + dados[message.from].itens);
        client.sendText(message.from,
          "*PROBLEMAS PARA ACESSAR e-MAIL*\n\n" +
          "Agora faça a descrição da solicitação. \n" +
          "Seja objetivo e direto no pedido.🎯\n\n" +
          "Voltar ao *Menu Principal* digite #️⃣ \n" +
          "Voltar ao *Menu Anterior* digite *VOLTAR* \n"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
      if ((checaOpcao(message.body, 5) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
        client.sendText(message.from,
          "❌ Opção inválida"
        ).then((result) => { }).catch((error) => { console.log(error) });
      }
    }
    function checaOpcao(str, x) {
      if ((str >= 1) && (str <= x)) {
        return true;
      } else {
        return false;
      }
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;