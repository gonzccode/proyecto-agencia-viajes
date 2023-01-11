import { TripsTitle } from "./title";
import { RecentTripsListContainer } from "./recentTripListContainer";
import { DistinguishedTripsListContainer } from "./distinguishedTripListContainer";


const Trips = () => {
    return (
        <>
            <TripsTitle />
            <RecentTripsListContainer />
            <DistinguishedTripsListContainer/>
        </>
    )
}

export { Trips } 