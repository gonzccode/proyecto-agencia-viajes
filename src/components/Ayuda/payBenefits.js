import React from 'react';
import Image from 'react-bootstrap/Image';
import iconPay from '../../assets/img/icono_pago.png';

const PayBenefits = () => {
  return (
    <section id='moreInfoHelp'>
      <div className="frecuentTitleHelp">
        <h2>
          <b className="helpTitle">Formas de pago</b> 
          <Image src={iconPay} alt='preguntas frecuentes' width={40} height={40} style={{marginLeft: '10px'}}/>
        </h2>
      </div>
      <div className='helpSectionQuestion'>
        <div className='helpSubtitle'>
          <h4>
            <b className="helpTitle">¿Cuales son las formas de pago?</b> 
          </h4>
          <p>
            <b>
            Las compras podrán abonarse en efectivo a través de nuestras vendedoras, o con depósito bancario o transferencia electrónica.
            </b>
          </p>
        </div>
        <div className='helpDescription'> 
          <div>
            <h5>
              <b>
              ¿Cómo debo terminar de abonar mi viaje?              
              </b>
            </h5>
            <div>
              <ul>
                <li>
                Una vez señado su viaje tiene tiempo hasta 10 días antes de la salida para completar el pago total.
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h5>
              <b>
              ¿Los menores de edad abonan la misma tarifa?
              </b>
            </h5>
            <div>
              <ul>
                <li>
                Los menores de 2 años no abonan y no tienen servicio. Con 2 años cumplidos abonan la totalidad del tour. Se toma como referencia la fecha de salida del viaje.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export {PayBenefits}