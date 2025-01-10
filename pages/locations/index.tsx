import {API} from "../../assets/api/api";
import {CharacterType, LocationType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";
import Image from "next/image";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";
import {useQuery} from "@tanstack/react-query";
import {log} from "node:util";

export const getLocations = () => {
    return fetch('https://rickandmortyapi.com/api/location', {
        method: "GET",
    }).then(res => res.json());
}

const Location = () => {
    const {data: locations} = useQuery<ResponseType<LocationType>>(['locations'], getLocations)
    if (!locations) return null

    console.log(locations)
    const locationList = locations.results.map(loc => <Card key={loc.id} {...loc} >
        <h4>{`Type: ${loc.type}`}</h4>
        <h4>{`Dimension: ${loc.dimension}`}</h4>
    </Card>)

    return (
        <PageWrapper>
            <Header/>
            {locationList}
        </PageWrapper>
    );
};

export default Location;

type LocationProps = {
    location: ResponseType<LocationType>
}