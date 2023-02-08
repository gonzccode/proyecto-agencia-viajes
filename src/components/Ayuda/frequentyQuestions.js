import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import iconQuestions from '../../assets/img/icono_preguntas.png';
import Spinner from 'react-bootstrap/Spinner';

const FrequentyQuestions = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    window.location.href = "#moreInfoHelp"
    setLoading(true)
    setTimeout (() => {
      setLoading(false)
    }, 3000);
    
  }, loading);

  return (
    <section id='moreInfoHelp'>
      <div className="frecuentTitleHelp">
        <h2>
          <b className="helpTitle">Preguntas frecuentes</b> 
          <Image src={iconQuestions} alt='preguntas' width={40} height={40} style={{marginLeft: '10px'}}/>
        </h2>
      </div>
      {!loading? 
      <>
        <div className='helpSectionQuestion'>
          <div className='helpSubtitle'>
            <h4>
              <b className="helpTitle">Denuncias, Reclamos y Arrepentimientos</b> 
            </h4>
            <p>
              <b>
                Ayuda para el usuario
              </b>
            </p>
          </div>
          <div className='helpDescription'> 
            <div>
              <h5>
                <b>
                  ¿Cómo realizar denuncias o reclamos?
                </b>
              </h5>
              <div>
                Ley 24.240 - Autoridad Nacional de aplicación
                <ul>
                  <li>
                    En defensa de los Consumidores para realizar reclamos ingrese <a href={'https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes'} target="_blank" rel="noopener noreferrer">aquí (DENUNCIA CONTRA UNA AGENCIA)</a>.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>
                  ¿Cómo cancelar una reserva? Botón de arrepentimiento
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  Para cancelar una reserva debe dirigirse al BOTON DE ARREPENTIMIENTO ubicado en el pie de pagina, o realizando <a href="https://wa.me/+5492323533332" target="_blank" rel="noopener noreferrer">click aqui</a>.
                  </li>
                  <li>
                  Su solicitud de revocación sólo procederá en caso que ud. haya realizado la compra vía web, Whatsapp o telefónicamente, y la misma se haya concretado dentro de los 10 días anteriores a la fecha.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='helpSectionQuestion'>
          <div className='helpSubtitle'>
            <h4>
              <b className="helpTitle">Otras consultas sobre el viaje</b> 
            </h4>
            <p>
              <b>
              Comidas, colectivos y más.
              </b>
            </p>
          </div>
          <div className='helpDescription'> 
            <div>
              <h5>
                <b>
                ¿Se puede elegir ubicación en el micro / colectivo?
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  No otorgamos números de butacas y ubicación predestinada. El asiento lo otorga el coordinador en el momento de subir al bus. De todas maneras tratamos de tener en cuenta los requerimientos de nuestros pasajeros en el armado de la taquilla.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>
                ¿Están incluidas las comidas en el viaje?
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  Las comidas en el viaje no están incluidas dentro del paquete. En el viaje se realizan paradas en paradores turisticos donde brindan el servicio de comidas ya sea para desayuno, almuerzo o cena.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </> 
      : 
      <div align='center'>
        <Spinner className='spinnerLoading' animation="border"  role="status"/>
      </div>
      }
    </section>
  )
}

export { FrequentyQuestions }