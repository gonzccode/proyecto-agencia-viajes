import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { detailTrips } from "../../utils/detailTrips";
import { TripDetail } from './tripDetail';
import { useParams } from 'react-router-dom';

const TripDetailContainer = () => {

  const[tripList, setTripList] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true)
    customFetch(detailTrips)
      .then(res => {
        setLoading(false)
        setTripList(res.find(trip => trip.id === parseInt(id)))
      }
      )
  }, [id]);

  return (
    <>
      {!loading ? <TripDetail tripList={tripList} /> : <strong>CARGANDO...</strong>}
    </>
  )
}

export { TripDetailContainer };