const dados = require("../dados");
const index = require('../index');
const con = require('../conexao');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if ((message.body.length >= 1) && ((message.body != "#") && (message.body != "*"))) {
      client.sendText(message.from,
        "❌ Opção inválida\nResponda #️⃣ para confirmar ou *️⃣ para cancelar"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "#") {
      var data = new Array(dados[message.from].itens);
      async function insertBD() {
        const promise = new Promise((resolve, reject) => {
          con.pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!
            connection.beginTransaction(function (err) {
              var id;
              if (err) {
                throw err;
              }
              else {
                let sql = 'INSERT INTO chamado(numero, data_abertura,' +
                  ' status, num_whatsapp, re, nome, ramal, email, setor,' +
                  ' opcao_menu, descricao) select max(numero) + 1 as numero, now(), ? FROM chamado';
                connection.query(sql, data, (err, results) => {
                  if (err) {
                    connection.rollback(function () {
                      throw err;
                    });
                  }
                  else {
                    id = results.insertId;
                  }
                  connection.release();
                });
                connection.commit(function (err) {
                  if (err) {
                    connection.rollback(function () {
                      throw err;
                    });
                    reject(err);
                  }
                  else {
                    connection.query('SELECT * FROM chamado WHERE id = ?', id, function (err, result) {
                      if (result) {
                        resolve(result[0].numero)
                      }
                    })
                  }
                  console.log('success!');
                });
              }
            });
          })
        });
        return promise;
      };
      insertBD().then((id) => {
        client.sendText(message.from,
          `👏🏻👏🏻 Seu Chamado foi aberto com Sucesso e registrado com Nº *${id}* ✅ ` +
          `A equipe de informática irá analisar e respondera o mais breve possivel.\n` +
          `Voce podera acompanhar o andamento da solicitação , com o numero do chamado ` +
          `Na *Opção 2* do Menu Principal.\n\n\n` +
          `Agradecemos por utilzar nossos serviços.\n\n` +
          `👋🏼👋🏼 Ate logo.`
        ).then((result) => { }).catch((error) => { console.log(error) });
        dados[message.from].stage = 0;
        while (dados[message.from].itens.length > 0) {
          dados[message.from].itens.pop();
        }
      })
    }
    if (message.body === "*") {
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
