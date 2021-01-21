var stages = {
  0: {
    descricao: "Boas Vindas Menu Principal",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Opcoes do Menu Principal",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Opção 1 - ABERTURA DE CHAMADO",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Confirma numero do RE",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Opcoes do SUB Menu - ABERTURA DE CHAMADOS", // PAREI AQUI DEVO MONTAR O 4.JS
    obj: require("./stages/4"),
  },
  5: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/5"),
  },
  6: {
    descricao: "Checa se usuario respondeu SIM ou NÃO para o envio de arquivos",
    obj: require("./stages/6"),
  },
  7: {
    descricao: "Finaliza Chamado SEM anexar arquivos",
    obj: require("./stages/7"),
  },
  8: {
    descricao: "Finaliza Chamado COM arquivos",
    obj: require("./stages/8"),
  },
  9: {
    descricao: "DELETA ou adiciona arquivos ao chamado",
    obj: require("./stages/9"),
  },
  10: {
    descricao: "Grava no BD",
    obj: require("./stages/10"),
  },
  11: {
    descricao: "dialogflow",
    obj: require("./stages/11"),
  },
  12: {
    descricao: "Consulta o Status do Chamado",
    obj: require("./stages/12"),
  },
  13: {
    descricao: "Consulta Ramais",
    obj: require("./stages/13"),
  },
  14: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/14"),
  },
  15: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/15"),
  },
  16: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/16"),
  },
  17: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/17"),
  },
  18: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/18"),
  },
  19: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/19"),
  },
  20: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/20"),
  },
  21: {
    descricao: "Apresenta Opção para envio de Arquivos",
    obj: require("./stages/21"),
  },
};

exports.step = stages;
