import React from 'react';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import iconWp from '../../assets/img/icono_wp.png';
import iconMail from '../../assets/img/icono_mail.png';
import iconoFacebook from '../../assets/img/icono_facebook.png';
import iconoInstagram from '../../assets/img/icono_instagram.png';
import iconoYoutube from '../../assets/img/icono_youtube.png';
import imagenFacebookOne from '../../assets/img/imagen_facebook_1.png';
import imagenFacebookTwo from '../../assets/img/imagen_facebook_2.png';
import imagenFacebookThree from '../../assets/img/imagen_facebook_3.jpg';
import imagenInstagramOne from '../../assets/img/imagen_instagram_1.png';
import imagenInstagramTwo from '../../assets/img/imagen_instagram_2.png';
import imagenInstagramThree from '../../assets/img/imagen_instagram_3.png';
import imagenYoutubeOne from '../../assets/img/imagen_youtube_1.png';
import imagenYoutubeTwo from '../../assets/img/imagen_youtube_2.png';
import imagenYoutubeThree from '../../assets/img/imagen_youtube_3.png';
import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

const Contacto = () => {
  const [loading, setLoading] = useState();

  useEffect(() => {
    window.location.href = "#contactSection"
    setLoading(true)
    setTimeout (() => {
      setLoading(false)
    }, 3000);
    
  }, loading);

  return (
    <section id='contactSection'>
        <div className="rectangularSubtitleContainers" style={{background:'#F0F0F0'}}>
            <div className="purpleBgSubtitleContainer">
            <h1 className="secondarySubtitles whiteSubtitles">Contacto</h1>
            </div>
        </div>
        {!loading? 
        <>
          <div className='contactDirect container' >
            <div className='row' style={{textAlign:'center'}}>
              <div className='col-md-2'>

              </div>  
              <div className='contactCard col-md-4'>
                {/* <div className='container'> */}
                    <Stack direction="horizontal" gap={2}>
                        <div className="contactIcon">
                          <a  href="https://wa.me/+5492323533332" target="_blank" rel="noopener noreferrer">
                            <Image src={iconWp} alt='contacto whatsapp' width={70} height={70}/>
                          </a>
                        </div>
                        <div className='contactIconText'>
                            <div>
                              <h5>
                                <b>
                                WhatsApp
                                </b>
                              </h5>
                              <p>
                                <b>
                                +54 9 2323 533 332
                                </b>
                              </p>
                              <p>
                                Horario laboral de
                                <br></br>
                                8.00hs a 19.00hs
                              </p>
                            </div>
                        </div>
                    </Stack>
                {/* </div> */}
              </div>
              <div className='contactCard col-md-4'>
                {/* <div className='container'> */}
                    <Stack direction="horizontal" gap={2}>
                        <div className="contactIcon">
                        <a href="mailto:lasclarisastours@gmail.com" target="_blank" rel="noopener noreferrer">
                          <Image src={iconMail} alt='contacto mail' width={70} height={70}/>
                        </a>
                        </div>
                        <div className="contactIconText">
                              <h5>
                                <b>
                                Mail
                                </b>
                              </h5>
                              <p>
                                <b>
                                lasclarisastours@gmail.com
                                </b>
                              </p>
                              <p>
                                Horario laboral de
                                <br></br>
                                8.00hs a 19.00hs
                              </p>
                        </div>
                    </Stack>
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className='contactSocial'>
            <div className='contactSocialOther'>
              <div className='container'>
                <div className='row'>
                  <div className='contactSocialIcon col-md-2'>
                    <a className='contactIconSocial' href="https://www.facebook.com/profile.php?id=100086243602373" target="_blank" rel="noopener noreferrer">
                      <Image src={iconoFacebook} alt='contacto mail' width={100} height={100}/>
                    </a>
                    <div align='center'>
                      <h5>
                        <b>Facebook</b>
                        </h5>
                      <p>
                        <b>/LASCLARISASTOURS</b>
                      </p>
                    </div>
                  </div>
                  <div className='contactSocialImageOne col-md-3'>
                    <Image src={imagenFacebookOne} alt='contacto mail' width={230} height={200} />
                  </div>
                  <div className='contactSocialImageTwo col-md-3'>
                    <Image src={imagenFacebookTwo} alt='contacto mail' width={230} height={200} />
                  </div>
                  <div className='contactSocialImageThree col-md-3'>
                    <Image src={imagenFacebookThree} alt='contacto mail' width={230} height={200} style={{borderRadius: '25px'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='contactSocialOther'>
              <div className='container'>
                <div className='row'>
                  <div className='contactSocialIcon col-md-2'>
                    <a className='contactIconSocial' href="https://www.instagram.com/lasclarisastours/" target="_blank" rel="noopener noreferrer">
                      <Image src={iconoInstagram} alt='contacto mail' width={100} height={100}/>
                    </a>
                    <div align='center'>
                      <h5>
                        <b>Instagram</b>
                        </h5>
                      <p>
                        <b>@lasclarisastours</b>
                      </p>
                    </div>
                  </div>
                  <div className='contactSocialImageOne col-md-3' style={{marginLeft:'20px'}}>
                    <Image src={imagenInstagramOne} alt='contacto mail' width={230} height={200} />
                  </div>
                  <div className='contactSocialImageTwo col-md-3' style={{marginLeft:'10px'}}>
                    <Image src={imagenInstagramTwo} alt='contacto mail' width={230} height={200} />
                  </div>
                  <div className='contactSocialImageThree col-md-3' style={{marginLeft:'10px'}}>
                    <Image src={imagenInstagramThree} alt='contacto mail' width={230} height={200}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='contactSocialOther'>
              <div className='container'>
                <div className='row'>
                  <div className='contactSocialIcon col-md-2'>
                    <a className='contactIconSocial' href="https://www.youtube.com/@lasclarisas" target="_blank" rel="noopener noreferrer">
                      <Image src={iconoYoutube} alt='contacto mail' width={100} height={100}/>
                    </a>
                    <div align='center'>
                      <h5>
                        <b>Youtube</b>
                        </h5>
                      <p>
                        <b>@lasclarisas</b>
                      </p>
                    </div>
                  </div>
                  <div className='contactSocialImageOne col-md-3' style={{marginLeft:'20px'}}>
                    <Image src={imagenYoutubeOne} alt='contacto mail' width={230} height={200} />
                  </div>
                  <div className='contactSocialImageTwo col-md-3' style={{marginLeft:'10px'}}>
                    <Image src={imagenYoutubeTwo} alt='contacto mail' width={230} height={200} />
                  </div>
                  <div className='contactSocialImageThree col-md-3' style={{marginLeft:'10px'}}>
                    <Image src={imagenYoutubeThree} alt='contacto mail' width={230} height={200}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </> 
        :
        <Spinner className='spinnerLoading' animation="border"  role="status"/>
        }
    </section>
  )
}

export { Contacto }