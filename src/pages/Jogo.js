import React,{useState} from 'react';
import Dica from '../assets/dica.png'

import Nivel1 from './nivel1/Nivel1'
import Nivel2 from './nivel1/Nivel2'
// import Nivel3 from './nivel1/Nivel3'
// import Nivel4 from './nivel1/Nivel4'
// import Nivel5 from './nivel1/Nivel5'
// import Nivel6 from './nivel1/Nivel6'
// import Nivel7 from './nivel1/Nivel7'
// import Nivel8 from './nivel1/Nivel8'
// import Nivel9 from './nivel1/Nivel9'
// import Nivel10 from './nivel1/Nivel10'
// import Nivel11 from './nivel1/Nivel11'
// import Nivel12 from './nivel1/Nivel12'

export default function Jogo() {
    const[dica,setDica]=useState('Dica');
    const[pontuacao,setPontuacao]=useState(0);
    const[nivel,setNivel]=useState(1);

    function handlePontuacao(valor,certou){
      if(certou == '-'){
        setPontuacao(pontuacao-valor)
      }else{
        setPontuacao(pontuacao+valor)
      }
      
    }
    function handleDica(){
        dica === 'Dica'?setDica('x'):setDica('Dica');
    }

  return (
    <div className='body'>
    <div className='dica'>
    <button onClick={handleDica} className='sairDica'>{dica}</button>
      {dica === 'Dica'?null:<img src={Dica} alt='dica' />}
    </div>
    <div className='pontuacao'>
      <h3>
       {pontuacao} pontos
      </h3>
    </div>
      {nivel === 1 ?<Nivel1 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 2 ?<Nivel2 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {/* {nivel === 3 ?<Nivel3 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 4 ?<Nivel4 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 5 ?<Nivel5 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 6 ?<Nivel6 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 7 ?<Nivel7 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 8 ?<Nivel8 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 9 ?<Nivel9 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 10 ?<Nivel10 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 11 ?<Nivel11 setNivel={setNivel} setPontuacao={handlePontuacao} />:null}
      {nivel === 12 ?<Nivel12 setNivel={setNivel} setPontuacao={handlePontuacao} />:null} */}
  </div>
  );
}
