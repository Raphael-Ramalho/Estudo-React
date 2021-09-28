import React from 'react';

const ValidacoesCadastro = React.createContext({  //definindo uma validação padrão
  cpf: semValidacao, 
  senha: semValidacao, 
  nome: semValidacao 
})

function semValidacao(dados) {
  console.log(dados)
  return { valido: true, texto: "" }
}

export default ValidacoesCadastro