import React,{useEffect,useState} from 'react';

export default function Nivel3({setNivel,setPontuacao}) {
  const [erro,setErro]=useState(false)
  const[resposta,setResposta]=useState();


  useEffect(()=>{
    if(resposta == 'verdade'){
      setErro(true)//Mostrar a explicação na tela
      setPontuacao(10,'-')//Quantos pontos vai ser tirado do pontuação
    }
    if(resposta == 'falso'){
      setNivel(2)//Passar para proximo nivel
      setPontuacao(10,'+')//Quantos pontos ele vai ganhar
    }
  },[resposta])

  function proximaFase(){
    setNivel(4)
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
          Se P é uma proposição verdadeira e Q é uma proposição falsa então o valor lógico da proposição a seguir é:
          </h2>

          <div className='jogo'>
            <div className='box'>
              <h2>
                P
              </h2>
            </div>
            <div className='operacao'>
              ->
            </div>
            <div className='box'>
              <h2>
                Q
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
            O conectivo condicional, representado pelo símbolo "->", só será falso quando a segunda proposição for falsa
          </h2>{/* Explicação se o cara errar */}
          <button className='jogar' onClick={proximaFase} style={{top:0,margin:10,backgroundColor:'#7fa',color:'#000'}}>
            proxima
          </button>
        </div>
        }
    </>
  );
}
