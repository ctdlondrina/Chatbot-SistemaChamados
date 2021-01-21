const dados = require("../dados");
const index = require('../index');
const con = require('../conexao');
const axios = require('axios');

async function execute(message) {
  index.clientPromisse.then((client) => {
    if ((message.body.length >= 1) && ((message.body != "#") && (message.body != "*"))) {
      client.sendText(message.from,
        "❌ Opção inválida\nResponda #️⃣ para confirmar ou *️⃣ para cancelar"
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
    if (message.body === "#") {
      var data = [dados[message.from].itens];
      async function insertBD2() {
        const promise = new Promise((resolve, reject) => {
          con.pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!
            connection.beginTransaction(function (err) {
              var lastID;
              if (err) {
                throw err;
              }
              else {
                connection.query('INSERT INTO chamado(numero, data_abertura,' +
                  ' status, num_whatsapp, re, nome, ramal, email, setor,' +
                  ' opcao_menu, descricao) select max(numero) + 1 as numero, now(), ? FROM chamado', data, function (err, result) {
                    if (err) {
                      connection.rollback(function () {
                        throw err;
                      });
                    }
                    lastID = result.insertId;
                    dados[message.from].midias.forEach(element => {
                      connection.query(`INSERT INTO midias(chamadoID, nome_arquivo) VALUES (${lastID}, ?)`, element, function (err, result) {
                        if (err) {
                          connection.rollback(function () {
                            throw err;
                          });
                        }
                      });
                    });
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
                    connection.query('SELECT * FROM chamado WHERE id = ?', lastID, function (err, result) {
                      resolve(result[0].numero);
                    })
                  }
                  console.log('Gravado com sucesso!');
                });
              }
            });
          });
        });
        return promise;
      }
      /*
      insertBD2().then((id) => {
        client.sendText(message.from,
          `👏🏻👏🏻 Seu Chamado foi aberto com Sucesso e registrado com *Nº ${id}*  ✅ ` +
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
        while (dados[message.from].midias.length > 0) {
          dados[message.from].midias.pop();
        }
        while (dados[message.from].messageId.length > 0) {
          dados[message.from].messageId.pop();
        }
      })
      */
      console.log(`http://localhost:8080/insertComMidias?data=${dados[message.from].itens}&midias=${dados[message.from].itens}`, data)

      axios.post(`http://localhost:3000/insertComMidias?data=${dados[message.from].itens}&midias=${dados[message.from].midias}`, data)
        .then((res) => {
          console.log(`Status: ${res.status}`);
          console.log('Body: ', res.data);
        }).catch((err) => {
          console.error(err);
        });
    }

    if (message.body === "*") {
      dados[message.from].stage = 0;
      while (dados[message.from].itens.length > 0) {
        dados[message.from].itens.pop();
      }
      while (dados[message.from].midias.length > 0) {
        dados[message.from].midias.pop();
      }
      while (dados[message.from].messageId.length > 0) {
        dados[message.from].messageId.pop();
      }
      console.log("Estagio " + dados[message.from].stage);
      console.dir("Dados:  " + dados[message.from].itens);
      client.sendText(message.from,
        "A Solicitação foi Cancelada 🚫\n" +
        "Obrigado por utilizar nosso atendimento Virtual."
      ).then((result) => { }).catch((error) => { console.log(error) });
      return
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
