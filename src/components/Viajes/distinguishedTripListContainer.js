import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { distinguishedTrips } from "../../utils/distinguishedTrips";
import { DistinguishedTripsList } from "./distinguishedTripList";
import Spinner from 'react-bootstrap/Spinner';

const DistinguishedTripsListContainer = () => {

    const [distinguishedTripsList, setDistinguishedTripsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(distinguishedTrips)
            .then(res => {
                setLoading(false);
                setDistinguishedTripsList(res)});
    }, []);

    return (
        <> 
            <h3 className="destinationSubtitles">destinos destacados</h3>
            {!loading ? <DistinguishedTripsList distinguishedTripsList={distinguishedTripsList}/> 
            : 
            <div align='center'>
                <Spinner className='spinnerLoading' animation="border"  role="status"/>
            </div>
            }
        </>
    )
}

export { DistinguishedTripsListContainer };