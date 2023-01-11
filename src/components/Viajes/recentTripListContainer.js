import { useState, useEffect } from 'react';
import { customFetch } from "../../utils/customFetch";
import { recentTrips } from "../../utils/recentTrips";
import { RecentTripList } from "./recentTripList";

const RecentTripListContainer = () => {

    const [recentTripList, setRecentTripList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        customFetch(recentTrips)
            .then(res => {
                setLoading(false);
                setRecentTripList(res)});
    }, []);

    return (
        <> 
            <h3 className="destinationSubtitles">destinos recientes</h3>
            {!loading ? <RecentTripList recentTripList={recentTripList}/> : <strong>CARGANDO...</strong>}
        </>
    )
}

export { RecentTripListContainer };