import React from 'react';
import Snackbar from 'material-ui/Snackbar';

export const AlertMsg = ({show, message, kind}) => {
  let color = '';
  let msg = '';

  if (kind === 'success') {
    color = 'rgb(12, 125, 80)';
    msg = message ? message : 'Salvo com sucesso!'
  } else if (kind === 'error') {
    color = 'rgb(189, 38, 38)';
    msg = message ? message : 'Ops, houve um erro. Tente novamente.'
  } else if (kind === 'warning')  {
    msg = message ? message : 'Atenção'
    color = 'rgb(209, 216, 2)'
  }

  return (
    <div>
      <Snackbar
        style={{marginBottom: 20, textAlign: 'center', fontSize: 16}}
        bodyStyle={{backgroundColor: color}}
        open={show}
        message={msg}
        autoHideDuration={4000}
      />
    </div>
  )
}

export default AlertMsg;
