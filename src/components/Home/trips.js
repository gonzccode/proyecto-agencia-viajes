import Stack from 'react-bootstrap/Stack';

const Trips = () => {
  return (
    <>
    <div id="nextTripsContainer">
      <div id="nextTripsSubtitleContainer">
        <h2 className="secondarySubtitles nextTripsSubtitle">Próximos Viajes</h2>
      </div>
    </div>
    <div id="frecuentJourneysSubtitleContainer">
      <h2 className="secondarySubtitles"><b id="frecuentJourneys">Salidas frecuentes,</b> <b id="travelWithUs">¡Viajá con nosotras!</b></h2>
    </div>
    <Stack direction="horizontal">
      <div>
        Aca carousel de cards!
      </div>
    </Stack>
    </>
  )
}

export { Trips }