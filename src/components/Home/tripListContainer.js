import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { trips } from "../../utils/trips";
import { TripsList } from "./tripList";

const TripsListContainer = () => {
    
    const [tripsList, setTripsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(trips)
            .then(res => {
                setLoading(false);
                setTripsList(res)});
    }, []);

    return (
        <>
            {!loading ? <TripsList tripsList={tripsList}/> : <strong>CARGANDO...</strong>}
        </>
    )
}

export { TripsListContainer }