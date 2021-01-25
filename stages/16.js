const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if (message.body === "#") {
      dados[message.from].stage = 1;
      dados[message.from].itens.splice(2, 9);
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
      if (dados[message.from].itens[9] === '1') {
        if ((checaOpcao(message.body, 2) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 2) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '2') {
        if ((checaOpcao(message.body, 3) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 3) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '3') {
        if ((checaOpcao(message.body, 3) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 3) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '4') {
        if ((checaOpcao(message.body, 3) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 3) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '5') {
        if ((checaOpcao(message.body, 4) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 4) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '6') {
        if ((checaOpcao(message.body, 3) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 3) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }

      if (dados[message.from].itens[9] === '8') {
        if ((checaOpcao(message.body, 2) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 2) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '9') {
        if ((checaOpcao(message.body, 2) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 2) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (dados[message.from].itens[9] === '10') {
        if ((checaOpcao(message.body, 2) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 2) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }

      if (dados[message.from].itens[9] === '12') {
        if ((checaOpcao(message.body, 3) === true) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
          dados[message.from].stage = 6;
          dados[message.from].itens.push(message.body);
          console.log("Estagio " + dados[message.from].stage);
          console.dir("Dados:  " + dados[message.from].itens);
          client.sendText(message.from,
            "Agora faça a descrição da solicitação. \n" +
            "Procure ser objetivo e direto no pedido.🎯"
          ).then((result) => { }).catch((error) => { console.log(error) });
        }
        else {
          if ((checaOpcao(message.body, 3) === false) && (message.body !== '#') && (message.body.toLowerCase() !== 'voltar') && (message.body.toLowerCase() !== 'sair')) {
            client.sendText(message.from,
              "❌ Opção inválida"
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        }
      }
      if (message.body.toLowerCase() === 'voltar') {
        dados[message.from].stage = 5;
        dados[message.from].itens.pop();
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
