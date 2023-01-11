import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { distinguishedTrips } from "../../utils/distinguishedTrips";
import { DistinguishedTripList } from "./distinguishedTripList";

const DistinguishedTripListContainer = () => {

    const [distinguishedTripList, setDistinguishedTripList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(distinguishedTrips)
            .then(res => {
                setLoading(false);
                setDistinguishedTripList(res)});
    }, []);

    return (
        <> 
            <h3 className="destinationSubtitles">destinos destacados</h3>
            {!loading ? <DistinguishedTripList distinguishedTripList={distinguishedTripList}/> : <strong>CARGANDO...</strong>}
        </>
    )
}

export { DistinguishedTripListContainer };