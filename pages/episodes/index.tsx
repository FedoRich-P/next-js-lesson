import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";
import {BaseLayout, getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import Location from "../locations";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes();

    if (!episodes) return {
        notFound: true,
    }
    return {
        props: {
            episodes
        }
    }
}

const Episodes = ({episodes}: EpisodesProps) => {
    const episodesList = episodes.results.map(episode => (
        <Card key={episode.id} {...episode} >
            <h4>{`Air date: ${episode.air_date}`}</h4>
            <h4>{`Episode: ${episode.episode}`}</h4>
        </Card>
    ))

    return (
        <PageWrapper>
                {episodesList}
        </PageWrapper>
    );
};

Episodes.getLayout = getLayout;
export default Episodes;

type EpisodesProps = {
    episodes: ResponseType<EpisodeType>
}