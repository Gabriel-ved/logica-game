import React from 'react';

export default function Main({history}) {
  function jogar(){
    history.push('/1')
  }

  return (
    <div className='body'>
        <h1 className='titulo'>Logica Matematica</h1>
        <button onClick={jogar} className='jogar'>
            Jogar
        </button>
    </div>
  );
}
