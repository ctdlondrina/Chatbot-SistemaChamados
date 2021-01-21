const dados = require("../dados");
const index = require('../index');
const con = require('../conexao');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if ((message.body === '#') || (message.body.toLowerCase() === 'voltar')) {
      dados[message.from].stage = 1;
      dados[message.from].itens.pop();
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
    if (isNaN(message.body) == true) {
      client.sendText(message.from,
        '❌ *Número inválido*\nDigite apenas numeros!'
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    else {
      con.pool.getConnection(function (err, connection) {
        if (err) console.log(err); // not connected!
        let sql = "SELECT *,date_format(data_abertura,'%d/%m/%Y') as data FROM chamado WHERE numero=?";
        connection.query(sql, message.body, function (error, result) {
          if (error) {
            console.log(`Erro na consulta SQL: ${error}`);
          }
          else {
            if (result.length === 0) {
              client.sendText(message.from,
                'Não foram encontrados dados com o *Número de Chamado* informado.\n' +
                'Por favor verifique e digite novamente!'
              ).then((result) => { }).catch((error) => { console.log(error) });
              return
            }
            if (result.length === 1) {
              client.sendText(message.from,
                '*Status:* ' + result[0].status + '\n' +
                '*Data Abertura:* ' + result[0].data + '\n' +
                '*Responsável:* ' + result[0].responsavel + '\n' +
                '*Usuário:* ' + result[0].nome + '\n' +
                '*Setor:* ' + result[0].setor + '\n\n' +
                'Para voltar ao *Menu Principal* digite #️⃣\n' +
                'Para consultar outro chamado basta digitar o número.'
              ).then((result) => { }).catch((error) => { console.log(error) });
              return
            }
          }
        })
      })
    }
  }).catch((error) => { console.log(error) });
}

exports.execute = execute;