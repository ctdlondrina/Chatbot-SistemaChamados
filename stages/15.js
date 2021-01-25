const dados = require("../dados");
const index = require('../index');
const fs = require('fs').promises;
const mime = require('mime-types');
const dialogflow = require('@google-cloud/dialogflow').v2;

async function execute(message) {

  const sessionClient = new dialogflow.SessionsClient({ keyFilename: "./ctd-yvee-3cf3a5ef7eb3.json" });

  // detect intent em texto
  async function detectIntent(projectId, sessionId, query, contexts, languageCode) {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: languageCode,
        },
      },
    };

    if (contexts && contexts.length > 0) {
      request.queryParams = {
        contexts: contexts,
      };
    }

    const responses = await sessionClient.detectIntent(request);
    return responses[0];
  }
  async function executeQueries(projectId, sessionId, queries, languageCode) {
    let context;
    let intentResponse;
    for (const query of queries) {
      try {
        intentResponse = await detectIntent(
          projectId,
          sessionId,
          query,
          context,
          languageCode
        );
        console.log('Detected intent:');
        console.log(`  Query: ${query}`);
        console.log(`  Response: ${intentResponse.queryResult.fulfillmentText}`);
        if (intentResponse.queryResult.intent) {
          console.log(`  Intent: ${intentResponse.queryResult.intent.displayName}`);
        } else {
          console.log('  No intent matched.');
        }
        return [`${intentResponse.queryResult.fulfillmentText}`, `${intentResponse.queryResult.intent.displayName}`];
      } catch (error) {
        console.log(error);
      }
    }
  }

  // detect intent com audio
  async function detectAudioIntent(projectId, sessionId, filename, encoding, sampleRateHertz, languageCode) {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
    const inputAudio = await fs.readFile(filename);
    const request = {
      session: sessionPath,
      queryInput: {
        audioConfig: {
          audioEncoding: encoding,
          sampleRateHertz: sampleRateHertz,
          languageCode: languageCode,
        },
      },
      inputAudio: inputAudio,
    };

    const [response] = await sessionClient.detectIntent(request);
    const result = response.queryResult;
    console.log('Detected intent:');
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
      console.log(`  Intent: ${result.intent.displayName}`);
    } else {
      console.log('  No intent matched.');
    }
    return [result.fulfillmentText, result.intent.displayName];
  }

  // função que devolve a resposta da intent em formato de audio
  async function detectIntentwithTTSResponse(projectId, sessionId, query, languageCode) {
    const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: query,
          languageCode: languageCode,
        },
      },
      outputAudioConfig: {
        audioEncoding: 'OUTPUT_AUDIO_ENCODING_LINEAR_16',
      },
    };
    const responses = await sessionClient.detectIntent(request);
    const audioFile = responses[0].outputAudio;
    let filename = `audio-${Math.random()}.wav`;
    await fs.writeFile(`./AudiosRespostas/${filename}`, audioFile, 'binary', (erro) => {
      if (erro) {
        console.log('erro ao gravar arquivo ', erro);
      }
      else {
        console.log(`Audio content written to file: ${outputFile}`);
      }
    })
  }
  // FIM DA CONFIGURACAO E FUNCOES DO DIALOGFLOW

  index.clientPromisse.then(async (client) => {
    if ((message.type === 'chat') && ((message.body === '#') || (message.body.toLowerCase() === 'voltar'))) {
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
      ).catch((error) => { console.log(error) });
      return
    }
    if (message.type === 'chat' && message.body.toLowerCase() === "sair") {
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
      let intentName = await (async function () {
        try {
          if (message.type === 'chat' && message.body != '#') {
            let textoResposta = await executeQueries("ctd-yvee", message.from, [message.body], 'pt-BR');
            client.sendText(message.from, textoResposta[0]).then((result) => { }).catch((erro) => {
              console.error('Error when sending: ', erro);
            });
            //chamada da função que gera a resposta do dialogflow em formato de audio .wav
            //detectIntentwithTTSResponse("ctd-yvee", message.from, [message.body], 'pt-BR');
            return textoResposta[1];
          }
          if (message.type === 'ptt') {
            const buffer = await client.decryptFile(message);
            let filename = `audio-${Math.random()}.${mime.extension(message.mimetype)}`;
            await fs.writeFile(filename, buffer, 'base64', (err) => {
              if (err) {
                console.log(`error: ${err.message}`);
                return;
              }
            })
            let textoResposta = await detectAudioIntent("ctd-yvee", message.from, filename, 'AUDIO_ENCODING_OGG_OPUS', '16000', 'pt-BR');
            client.sendText(message.from, textoResposta[0]).then((result) => { }).catch((erro) => {
              console.error('Error when sending: ', erro);
            });
            await fs.unlink(filename, (error) => {
              if (error) {
                console.log('Erro ao deletar o arquivo de audio');
              }
            });
            return textoResposta[1];
          }
          if (message.type !== 'chat' && message.type !== 'ptt') {
            client.sendText(message.from, 'Desculpa 😕 não compreendo o que significa o arquivo que você me enviou.\n' +
              'você pode perguntar através de texto ou se preferir pode ate me mandar um *AUDIO* que eu vou entender 👍🙂'
            ).then((result) => { }).catch((error) => { console.log(error) });
          }
        } catch (error) {
          console.log('deu erro:  ', error);
        }
      })();
      if (intentName === 'home.office - no') {
        await client.sendFile(message.from,
          './Manuais_Procedimentos/RT - Passo a Passo para logar em Home Office - FINAL.pdf',
          'Home Office.pdf',
          'Passo a Passo').then((result) => { }).catch((erro) => {
            console.error('Error when sending: ', erro);
          });
        await client.sendText(message.from, 'Resolveu o seu problema ?').then((result) => { }).catch((erro) => {
          console.log('error when sending: ', erro);
        })
      }
    }
  }).catch((error) => console.log(error));
}

exports.execute = execute;
