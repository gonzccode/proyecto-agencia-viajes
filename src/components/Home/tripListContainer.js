import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { trips } from "../../utils/trips";
import { TripList } from "./tripList";

const TripListContainer = () => {
    
    const [tripList, setTripList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(trips)
            .then(res => {
                setLoading(false);
                setTripList(res)});
    }, []);

    return (
        <>
            {!loading ? <TripList tripList={tripList}/> : <strong>CARGANDO...</strong>}
        </>
    )
}

export { TripListContainer }