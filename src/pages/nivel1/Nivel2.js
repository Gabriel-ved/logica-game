import React,{useEffect,useState} from 'react';

export default function Nivel2({setNivel,setPontuacao}) {
  const [erro,setErro]=useState(false)
  const[resposta,setResposta]=useState();

  useEffect(()=>{
    if(resposta == 'verdade'){
      setNivel(3)//Passar para proximo nivel
      setPontuacao(10,'+')//Quantos pontos ele vai ganhar
    }
    if(resposta == 'falso'){
      setErro(true)//Mostrar a explicação na tela
      setPontuacao(10,'-')//Quantos pontos vai ser tirado do pontuação
    }
  },[resposta])

  function proximaFase(){
    setNivel(3)
  }
  function verdadeiro(){
    setResposta('verdade')
  }
  function falso(){
    setResposta('falso')
  }

  return (
    <>
        
      <h2>
        {/* Titudo ou questão */} 
      </h2>
      <div className='jogo'>
        {!erro?  
        <>
          <div className='box'>
            <h2>
              V
            </h2>
          </div>
          <div className='operacao'>
            ->
          </div>
          <div className='box'>
            <h2>
              F
            </h2>
          </div>
        </>
        :
        <div className='box' style={{flexDirection:'column'}}>
          <h2>Explicação</h2>{/* Explicação se o cara errar */}
          <button className='jogar' onClick={proximaFase} style={{top:0,margin:10,backgroundColor:'#7fa',color:'#000'}}>
            proxima
          </button>
        </div>
        }
      </div>
      <div>
        <button onClick={falso} className='jogar false'>
          Falso
        </button>
        <button onClick={verdadeiro} className='jogar true'>
          Verdadeiro
        </button>
      </div>
    </>
  );
}
