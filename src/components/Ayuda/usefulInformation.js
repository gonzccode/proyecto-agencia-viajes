import React from 'react'
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import iconInformation from '../../assets/img/icono_valija.png';
import Spinner from 'react-bootstrap/Spinner';

const UsefulInformation = () => {
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
          <b className="helpTitle">Información útil para tu viaje</b> 
          <Image src={iconInformation} alt='preguntas frecuentes' width={40} height={40} style={{marginLeft: '10px'}}/>
        </h2>
      </div>
      {!loading? 
      <>
        <div className='helpSectionQuestion'>
          <div className='helpSubtitle'>
            <h4>
              <b className="helpTitle">¿Qué documentación necesito para viajar dentro de Argentina?</b> 
            </h4>
            <p>
              <b>
              Documentación necesaria segun las diferentes edades
              </b>
            </p>
          </div>
          <div className='helpDescription'> 
            <div>
              <h5>
                <b>
                MAYORES DE 18 AÑOS
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  DNI o Pasaporte
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>
                MENORES DE 6 A 12 AÑOS
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  Puede viajar con alguno de sus progenitores. Para eso es necesario llevar los documentos que demuestran el vínculo familiar (DNI, partida de nacimiento, libreta de matrimonio, pasaporte).
                  </li>
                  <li>
                  Si no viaja con sus progenitores puede viajar con un acompañante con autorización.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>
                ADOLESCENTES de 13 a 17 años
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  Puede viajar solo con una autorización de sus progenitores.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='helpSectionQuestion'>
          <div className='helpSubtitle'>
            <h4>
              <b className="helpTitle">Autorizaciones para viajar</b> 
            </h4>
            <p>
              <b>
              Detalles sobre permisos de viajes, autorizaciones y acompañamiento
              </b>
            </p>
          </div>
          <div className='helpDescription'> 
            <div>
              <h5>
                <b>
                ¿Los menores emancipados necesitan autorización para viajar?
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  No, no necesitan autorización.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>
                ¿Quién puede autorizar a un menor de edad a viajar solo o con un acompañante?
                </b>
              </h5>
              <div>
                <ul>
                  <li>
                  Debe autorizarlo por lo menos uno de los progenitores. El vínculo se puede demostrar, por ejemplo, con el DNI, partida de nacimiento, libreta de matrimonio que tenga anotado el nacimiento del menor o pasaporte.
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5>
                <b>
                ¿Quién puede hacer la autorización para que los niños y adolescentes puedan viajar solos o con acompañante?
                </b>
              </h5>
              <div>
                  La autorización puede hacerla:
                  <ul>
                      <li>
                      Un escribano
                      </li>
                      <li>
                      El juez competente
                      </li>
                      <li>
                      La autoridad del Registro de Civil o la Justicia de Paz
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='helpSectionQuestion'>
          <div className='helpSubtitle'>
            <h4>
              <b className="helpTitle">¿Qué documentación debo llevar para viajar al exterior?</b> 
            </h4>
            <p>
              <b>
              Trámites y servicios para viajes al exterior
              </b>
            </p>
          </div>
          <div className='helpDescription'> 
            <div>
              <h5>
                <b>
                ¿Los menores emancipados necesitan autorización para viajar?
                </b>
              </h5>
              <div>
              En la web oficial de <a href={'https://www.argentina.gob.ar/interior/migraciones'} target="_blank">MIGRACIONES</a> puede conocer cuales son los documentos válidos para viajes en el exterior.
              <br></br>
              Haga click <a href={'https://www.argentina.gob.ar/interior/migraciones'} target="_blank">aquí</a> para ir al sitio (https://www.argentina.gob.ar/interior/migraciones).
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

export { UsefulInformation }