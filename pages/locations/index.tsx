import {LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";
import {dehydrate, useQuery} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/query-core";
import {BaseLayout, getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import Characters from "../characters";
import {Header} from "../../components/Header/Header";

export const getLocations = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/location', {
        method: "GET",
    });
    return await res.json();
}

export const getStaticProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.fetchQuery(['locations'], getLocations)

    return {
        props: {
            dehydrateState: dehydrate(queryClient)
        }
    }
}

const Location = () => {
    const {data: locations} = useQuery<ResponseType<LocationType>>(['locations'], getLocations)
    if (!locations) return null

    const locationList = locations.results.map(loc => (
        <Card key={loc.id} {...loc} >
            <h4>{`Type: ${loc.type}`}</h4>
            <h4>{`Dimension: ${loc.dimension}`}</h4>
        </Card>
    ))

    return (
        <PageWrapper>
            {locationList}
        </PageWrapper>
    );
};

Location.getLayout = getLayout;
export default Location;

type LocationProps = {
    location: ResponseType<LocationType>
}