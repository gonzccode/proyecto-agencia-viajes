import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import frequentQuestions from '../../assets/img/preguntas_frecuentes.png';
import usefulInformation from '../../assets/img/informacion_util.png';
import payBenefits from '../../assets/img/pago_beneficios.png';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Ayuda = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    window.location.href = "#helpSection"
    setLoading(true)
    setTimeout (() => {
      setLoading(false)
    }, 3000);
    
  }, loading);

  return (
    <section id='helpSection' align='center'>
      <div className="rectangularSubtitleContainers" style={{background:'#F0F0F0'}}>
        <div className="purpleBgSubtitleContainer">
          <h1 className="secondarySubtitles whiteSubtitles">Ayuda</h1>
        </div>
      </div>
      {!loading ? 
        <div id="helpList container"  align='center'>
          {/* <div className='row'> */}
          <div className='helpListRow row' align='center'>
            <Link className='cardHelp col-md-4' to={"/preguntas-frecuentes"} style={{textDecoration:'none', color:'black'}}>
              <Image src={frequentQuestions} alt='preguntas frecuentes' width={70} height={70} style={{marginTop: '10px'}}/>
              <h4 className="secondarySubtitles" style={{marginTop: '10px'}}><b className="cardTitle">Preguntas Frecuentes</b></h4>
              <p className='helpText'>
                ¿Cómo realizar denuncias o reclamos?, ¿Que pasa si me arrepiento de viajar? ¿Se puede cancelar el viaje?
              </p>
            </Link>
            <Link className='cardHelp col-md-4' to={"/informacion-util"} style={{textDecoration:'none', color:'black'}}>
              <Image src={usefulInformation} alt='informacion util' width={90} height={90}/>
              <h4 className="secondarySubtitles"><b className="cardTitle">Información útil para tu viaje</b></h4>
              <p className='helpText'>
                Documentación necesaria para viajar, Autorizaciones de menores, Info para realizar viajes al exterior.
              </p>
            </Link>
            <Link className='cardHelp col-md-4' to={"/formas-pago"} style={{textDecoration:'none', color:'black'}}>
              <Image src={payBenefits} alt='pagos y beneficios' width={90} height={90}/>
              <h4 className="secondarySubtitles"><b className="cardTitle">Formas de Pago</b></h4>
              <p className='helpText'>
                Consulta las diferentes formas de pago disponibles, como abonar el viaje y todos nuestros beneficios.
              </p>
            </Link>
          </div>
        </div>
      : 
        <div id='spinnerSection'>
          <Spinner className='spinnerLoading' animation="border"  role="status"/>
        </div>
        
      }
    </section>
  )
}

export { Ayuda }