import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'react-bootstrap/Image';
import lasClarisasFoto from '../../assets/img/las_clarisas_foto.png';
import Button from 'react-bootstrap/Button';
import arrowIcon from '../../assets/img/arrow_icon.png';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

const Nosotras = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    window.location.href = "#usSection"
    setLoading(true)
    setTimeout (() => {
      setLoading(false)
    }, 3000);
    
  }, loading);

  return (
    <section id='usSection' align='center'>
      <div className="rectangularSubtitleContainers">
        <div className="purpleBgSubtitleContainer">
          <h1 className="secondarySubtitles whiteSubtitles">Nosotras</h1>
        </div>
      </div>
      {!loading ?
      <>
        <div className='usDescription'>
          <div className='columnOne'>
            <p>Aquí estamos nosotras, <b>Las Clarisas Tours</b>:
            <br></br>
            <span id="travelWithUs">Andrea Ferrari, Victoria Oltolina y Andrea Solana.</span></p>
            <br></br>
            <p>En principio, cuando alguien decide estudiar turismo lo primero que suelen decirte es “Ay que linda carrera” 
            y “vas a vivir viajando” o te miran con cara rara y te preguntan <br></br>¿Eso se estudia?</p>
            <br></br>
            <p>La respuesta es: ¡Sí, el turismo se estudia! No es únicamente viajar y hablar idiomas. Estudiar turismo implica 
              adquirir una gran cantidad de conocimientos técnicos y habilidades, que se ponen en juego no solo en el momento 
              en el que se produce el viaje, sino previa y posterior al mismo, trabajando en conjunto con las comunidades, el 
              sector público y privado, para así acompañar al turista en cada momento del viaje.</p>
            <br></br>
            <p>
            Cuando eliges una carrera universitaria o terciaria, la eliges teniendo la certeza que será para toda la vida. 
            Los profesionales en Turismo somos inquietos, creativos y por sobre todas las cosas somos innovadores.
            </p>
          </div>
          <div className='columnTwo'>
            <p>En ese camino de aprendizaje, nos conocimos las tres, para nunca más terminar nuestra amistad.</p>
            <br></br>
            <p>Y si bien la vida nos llevó por caminos laborales diferentes, aquí estamos trabajando a la par. Planificando 
              y coordinando cada viaje, para que sea una experiencia inolvidable para cada persona, para brindar una atención personalizada.</p>
            <br></br>
            <p>Trabajar en Turismo es tan complejo, como gratificante. Planificar y llevar a cabo cada salida es toda una aventura. 
              Es tener la certeza, que cuando das lo mejor de vos, estás brindando experiencias únicas e inolvidables. 
              Es generar un lazo de empatía con cada persona, que lo acompañará toda la vida!</p>
            <br></br>
            <p>Amamos lo que hacemos, vivimos aprendiendo cada día, porque nuestro país tiene lugares y personas 
              increíbles y por sobre todas las cosas</p>
            
            <h2 id="travelWithUs">
                <b>
                  <i>
                  ¡VIAJAR TE ABRE LA MENTE!
                  </i>
                </b>
            </h2>
          </div>
        </div>
        <div className='usPhoto'>
          <Image src={lasClarisasFoto} alt="imagen de nosotras" id="clarisasImage" width={640} height={448}/> 
        </div>
        <div className="rectangularSubtitleContainers" style={{paddingTop:'50px'}}>
          <div className="purpleBgSubtitleContainer">
            <h2 className="secondarySubtitles whiteSubtitles">¿Por qué Las Clarisas?</h2>
          </div>
        </div>
        <Stack className='usWhy' direction="horizontal" gap={2}>
          <div >
            <p>En un principio, en años universitarios, llegó el momento de las tan ansiadas visitas guiadas. 
              Lo bueno de la cursada era que podías agruparte con tus mejores amigas.</p>
            <br></br>
            <p>Así fue que juntas, realizamos nuestra primer visita guiada a la Basílica de San Francisco de 
              Asís en el Barrio de Monserrat, convencidas de que cada Iglesia, cada barrio y cada lugar tiene 
              historias que merecen ser contadas.</p>
            <br></br>
            <p>
            Esta experiencia única nos contagió el espíritu Franciscano del lugar. Donde descubrimos la orden 
            de “Las Clarisas” fundada por Santa Clara y San Francisco de Asís.
            </p>
          </div>
          <div style={{marginTop:'50px'}}>
            <p>Desde ese día nuestro grupo de estudio, pasó a llamarse “Las Clarisas”. En ese afán de aprender 
              un poco de todo, más tarde supimos que Santa Clara es la Patrona de las Comunicaciones y la Televisión.</p>
            <br></br>
            <p>Y justamente es lo que más nos representa, porque fomentamos y trasmitimos el amor por nuestros patrimonios 
              culturales y naturales.</p>
            <br></br>
            <p>Tenemos vocación de servicio, trabajando para satisfacer necesidades y superar expectativas, porque tenemos 
              la certeza, de que VIAJAR es el mejor camino para aprender del mundo.</p>
            <br></br>
            <br></br>
            <h2 id="travelWithUs" align='right'>
                <b>
                  ¡Viajá con Nosotras!
                </b>
            </h2>
          </div>
        </Stack>
        <Link to="/viajes" className='usButton'>
          <Button variant="primary" size="lg" id="usWhyButton">VER PRÓXIMOS VIAJES <Image src={arrowIcon} alt="icono de flecha"/></Button>
        </Link>
      </> 
      :
      <Spinner className='spinnerLoading' animation="border"  role="status"/>
      }
    </section>
  )
}

export { Nosotras }