import Image from 'react-bootstrap/esm/Image';
import busIcon from '../../assets/img/bus_icon.png';
import ticketIcon from '../../assets/img/ticket_icon.png';

const DetailData = () => {
    return (
        <>
            <div className="leftInformationContainer detailTabletContainer">
                <div>
                    <h3>Salida:</h3>
                    <div className="purpleBgSubtitleContainer whiteSubtitles">
                        Consultar fecha + info
                    </div>
                </div>
            </div>
            <div className="leftInformationContainer mobileDetailIconsContainer">
                <div>
                    <div className="detailIconContainers">
                        <Image src={busIcon} alt="icono de micro" className="detailIcons"/>
                    </div>
                    <div className="detailIconContainers">
                        <Image src={ticketIcon} alt="icono de ticket" className="detailIcons" width={65} height={65}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export { DetailData };