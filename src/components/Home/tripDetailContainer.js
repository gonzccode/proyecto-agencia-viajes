import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { detailTrips } from "../../utils/detailTrips";
import { TripDetail } from './tripDetail';

const TripDetailContainer = () => {

  const[tripList, setTripList] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    customFetch(detailTrips)
      .then(res => {
        setLoading(false)
        setTripList(res.find(trip => trip.id === 1))
      }
      )
  }, [])

  return (
    <>
      {!loading ? <TripDetail tripList={tripList} /> : <strong>CARGANDO...</strong>}
    </>
  )
}

export { TripDetailContainer };