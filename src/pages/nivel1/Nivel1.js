import React,{useEffect,useState} from 'react';

export default function Nivel1({setNivel,setPontuacao}) {
  const [erro,setErro]=useState(false)
  const[resposta,setResposta]=useState();


  useEffect(()=>{
    if(resposta == 'verdade'){
      setNivel(2)//Passar para proximo nivel
      setPontuacao(10,'+')//Quantos pontos ele vai ganhar
    }
    if(resposta == 'falso'){
      setErro(true)//Mostrar a explicação na tela
      setPontuacao(10,'-')//Quantos pontos vai ser tirado do pontuação
    }
  },[resposta])

  function proximaFase(){
    setNivel(2)
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
            Maria foi para a escola e Carlos não foi trabalhar{/* Titudo ou questão */}
          </h2>

          <div className='jogo'>
            <div className='box'>
              <h2>
                V
              </h2>
            </div>
            <div className='operacao'>
              ^
            </div>
            <div className='box'>
              <h2>
                F
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
            O conectivo "e", representado pelo símbolo “^” junta proposições as quais somente resultarão em Verdadeiro se todos os valores forem Verdadeiros.
          </h2>{/* Explicação se o cara errar */}
          <button className='jogar' onClick={proximaFase} style={{top:0,margin:10,backgroundColor:'#7fa',color:'#000'}}>
            proxima
          </button>
        </div>
        }
    </>
  );
}
