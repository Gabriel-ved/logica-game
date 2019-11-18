import React,{useEffect,useState} from 'react';

export default function Nivel2({setNivel,setPontuacao}) {
  const [erro,setErro]=useState(false)
  const[resposta,setResposta]=useState();

  useEffect(()=>{
    if(resposta == 'verdade'){
      setErro(true)//Mostrar a explicação na tela
      setPontuacao(10,'-')//Quantos pontos vai ser tirado do pontuação
    }
    if(resposta == 'falso'){
      setNivel(3)//Passar para proximo nivel
      setPontuacao(10,'+')//Quantos pontos ele vai ganhar
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
        
        {!erro?  
        <>
          <h2>
            {/* Titudo ou questão */} 
          </h2>
          <div className='jogo'>
            <div className='box'>
              <h2>
                ~V
              </h2>
            </div>
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
        :
        <div className='box' style={{flexDirection:'column'}}>
          <h2>
            O conectivo de negação "~", nega o valor lógico de uma proposição. Considera-se p como uma proposição de valor lógico igual a verdadeiro, então sua negação é igual a falso.
          </h2>{/* Explicação se o cara errar */}
          <button className='jogar' onClick={proximaFase} style={{top:0,margin:10,backgroundColor:'#7fa',color:'#000'}}>
            proxima
          </button>
        </div>
        }
    </>
  );
}
