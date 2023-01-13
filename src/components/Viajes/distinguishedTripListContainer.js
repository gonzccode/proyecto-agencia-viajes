import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { distinguishedTrips } from "../../utils/distinguishedTrips";
import { DistinguishedTripsList } from "./distinguishedTripList";

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
            {!loading ? <DistinguishedTripsList distinguishedTripsList={distinguishedTripsList}/> : <strong>CARGANDO...</strong>}
        </>
    )
}

export { DistinguishedTripsListContainer };