const Whatsapp = require('venom-bot');
const dados = require("./dados");
const stages = require("./stages");

async function createSession() {
    const client = await Whatsapp.create(
        'API-Whatsapp',
        (base64Qrimg, asciiQR, attempts, urlCode) => {
            //console.log('Number of attempts to read the qrcode: ', attempts,'\n');
            // console.log('Terminal qrcode: ', asciiQR);
            // console.log('base64 image string qrcode: ', base64Qrimg);
            // console.log('urlCode (data-ref): ', urlCode);
        },

        (statusSession, session) => {
            console.log('Status Session: ', statusSession, '\n');
            console.log('Session name: ', session, '\n');
        },
        {
            folderNameToken: 'tokens',
            headless: true,
            devtools: false,
            useChrome: true,
            debug: false,
            logQR: true,
            browserArgs: ['--no-sandbox', '--disable-extensions', '--no-default-browser-check', '--ignore-certificate-errors', '--disable-default-apps',],
            disableWelcome: true,
            updatesLog: false,
            autoClose: 60000,
            createPathFileToken: true,
        })
    return client
}
(async function () {
    exports.client = client = await createSession();
    start(client)
})();

Whatsapp.defaultLogger.level = 'silly';

function start(client) {
    client.onMessage(async (message) => {
        if (typeof message != "undefined") {
            client.startTyping(message.from);
        }
        (function () {
            stages[getStage(message.from)].obj.execute(
                message
            );
        })();
        if (typeof message != "undefined") {
            client.stopTyping(message.from);
        }
    });
    client.onStateChange((state) => {
        console.log('State changed: ', state);
        if ('CONFLICT'.includes(state)) client.useHere();
        if ('UNPAIRED'.includes(state)) console.log('logout');
    });
    client.onIncomingCall(async (call) => {
        console.log(call);
        client.sendText(call.peerJid, "Sorry, I still can't answer calls");
    });
}

function getStage(user) {
    if (dados[user]) {
        return dados[user].stage;
    }
    else {
        dados[user] = {
            stage: 0,
            itens: [],
            midias: [],
            messageId: [],
        };
        return dados[user].stage;
    }
}
