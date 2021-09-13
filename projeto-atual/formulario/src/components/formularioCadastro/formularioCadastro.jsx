import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("");//O use State devolve uma variável para referenciar qual o estado que está dentro do componente
  const [sobrenome, setSobrenome] = useState("")
  const [cpf, setCpf] = useState("")
  const [promocoes, setPromocoes] = useState(true)
  const [novidades, setNovidades] = useState(true)


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
      }}>
      <TextField
        value={nome}
        onChange={event => {
          setNome(event.target.value)
        }}
        id="nome"
        label="Nome"
        color="secondary"
        variant='outlined'
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={event => {
          setSobrenome(event.target.value)
        }}
        id="sobrenome"
        label="Sobrenome"
        color="secondary"
        variant='outlined'
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={event => {
          setCpf(event.target.value)
        }}
        id="cpf"
        label="CPF"
        color="secondary"
        variant='outlined'
        fullWidth
        margin="normal" />
      <FormControlLabel
        label="Promoções"
        control={<Switch checked={promocoes} onChange={event=>{
          setPromocoes(event.target.checked)
        }} name="promocoes" color="primary" />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch checked={novidades} onChange = {event => {
          setNovidades(event.target.checked)
        }} name="novidades" color="primary" />}
      />

      <Button type='submit' variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;