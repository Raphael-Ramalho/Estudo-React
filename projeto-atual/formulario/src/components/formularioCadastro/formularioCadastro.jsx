import React from 'react';
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core"

function FormularioCadastro() {
  let nome =""
  
  return (
    <form>
      <TextField
        onChange={event =>{console.log(event.target)}}
        id="nome"
        label="Nome"
        color="secondary"
        variant='outlined'
        fullWidth
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        color="secondary"
        variant='outlined'
        fullWidth
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF"
        color="secondary"
        variant='outlined'
        fullWidth
        margin="normal" />
      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />

      <FormControlLabel 
        label="Novidades" 
        control={<Switch name="novidades" defaultChecked color="primary" />} 
      />

      <Button type='submit' variant="contained" color="primary">Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;