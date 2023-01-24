import React from 'react';
import Image from 'react-bootstrap/Image';
import frequentQuestions from '../../assets/img/preguntas_frecuentes.png';
import usefulInformation from '../../assets/img/informacion_util.png';
import payBenefits from '../../assets/img/pago_beneficios.png';

const Ayuda = () => {
  return (
    <section id='helpSection' align='center'>
      <div className="rectangularSubtitleContainers" style={{background:'#F0F0F0'}}>
        <div className="purpleBgSubtitleContainer">
          <h2 className="secondarySubtitles whiteSubtitles">Ayuda</h2>
        </div>
      </div>
      
      <div id="helpList" >
        <div className='row'>
          <div className='cardHelp col-md-4'>
            <Image src={frequentQuestions} alt='preguntas frecuentes' width={70} height={70} style={{marginTop: '10px'}}/>
            <h4 className="secondarySubtitles" style={{marginTop: '10px'}}><b className="cardTitle">Preguntas Frecuentes</b></h4>
            <p className='helpText'>
              ¿Cómo realizar denuncias o reclamos?, ¿Que pasa si me arrepiento de viajar? ¿Se puede cancelar el viaje?
            </p>
          </div>
          <div className='cardHelp col-md-4'>
            <Image src={usefulInformation} alt='informacion util' width={90} height={90}/>
            <h4 className="secondarySubtitles"><b className="cardTitle">Información útil para tu viaje</b></h4>
            <p className='helpText'>
              Documentación necesaria para viajar, Autorizaciones de menores, Info para realizar viajes al exterior.
            </p>
          </div> 
          <div className='cardHelp col-md-4'>
            <Image src={payBenefits} alt='pagos y beneficios' width={90} height={90}/>
            <h4 className="secondarySubtitles"><b className="cardTitle">Formas de Pago y Beneficios</b></h4>
            <p className='helpText'>
              Consulta las diferentes formas de pago disponibles, como abonar el viaje y todos nuestros beneficios.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Ayuda }