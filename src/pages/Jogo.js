import React,{useState} from 'react';
import Dica from '../assets/dica.png'

import Nivel1 from './nivel1/Nivel1'

export default function Jogo() {
    const[dica,setDica]=useState('Dica');
    const[pontuacao,setPontuacao]=useState(0);
    function handleDica(){
        dica == 'Dica'?setDica('x'):setDica('Dica');
    }
    function verdadeiro(){

    }
    function falso(){
      
    }
  return (
    <div className='body'>
    <div className='dica'>
    <button onClick={handleDica} className='sairDica'>{dica}</button>
      {dica == 'Dica'?null:<img src={Dica} alt='dica' />}
    </div>
    <div className='pontuacao'>
      <h3>
       0 pontos
      </h3>
    </div>
    <Nivel1 />
    <div>
      <button className='jogar false'>
        Falso
      </button>
      <button className='jogar true'>
        Verdadeiro
      </button>
    </div>
  </div>
  );
}
