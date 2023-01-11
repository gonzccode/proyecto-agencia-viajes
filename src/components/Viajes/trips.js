import { TripsTitle } from "./title";
import { RecentTripListContainer } from "./recentTripListContainer";
import { DistinguishedTripListContainer } from "./distinguishedTripListContainer";


const Trips = () => {
    return (
        <>
            <TripsTitle />
            <RecentTripListContainer />
            <DistinguishedTripListContainer/>
        </>
    )
}

export { Trips } 