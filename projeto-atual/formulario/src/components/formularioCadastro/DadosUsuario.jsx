import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      aoEnviar()
    }}>
      <TextField 
        id="email" 
        label="email" 
        type="email" 
        variant='outlined'
        fullWidth
        required
        margin="normal" 
      />
      <TextField 
        id="senha" 
        label="senha" 
        type="password" 
        variant='outlined'
        fullWidth
        required
        margin="normal" 
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  )
}

export default DadosUsuario