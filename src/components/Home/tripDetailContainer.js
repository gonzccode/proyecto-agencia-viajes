import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { detailTrips } from "../../utils/detailTrips";
import { DetailTitle } from './detailTitle';
import { TripDetail } from './tripDetail';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const TripDetailContainer = () => {

  const[tripList, setTripList] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    window.location.href = "#idDetailTrip"
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
      <section id='idDetailTrip'>
      <DetailTitle />
      {!loading ? <TripDetail tripList={tripList} /> 
      : 
      <div align='center'>
        <Spinner className='spinnerLoading' animation="border"  role="status"/>
      </div>
      }
      </section>
    </>
  )
}

export { TripDetailContainer };