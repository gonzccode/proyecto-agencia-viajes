import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { recentTrips } from "../../utils/recentTrips";
import { RecentTripsList } from "./recentTripList";

const RecentTripsListContainer = () => {

    const [recentTripsList, setRecentTripsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(recentTrips)
            .then(res => {
                setLoading(false);
                setRecentTripsList(res)});
    }, []);

    return (
        <> 
            <h3 className="destinationSubtitles">destinos recientes</h3>
            {!loading ? <RecentTripsList recentTripsList={recentTripsList}/> : <strong>CARGANDO...</strong>}
        </>
    )
}

export { RecentTripsListContainer };