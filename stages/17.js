const dados = require("../dados");
const index = require('../index');

async function execute(message) {
  index.clientPromisse.then((client) => {

  }).catch((error) => { console.log(error) });
}

exports.execute = execute;
