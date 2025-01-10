import {API} from "../../assets/api/api";
import {EpisodeType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";

export const getServerSideProps = async () => {
    const episodes = await API.rickAndMorty.getEpisodes();

    if(!episodes) return {
        notFound: true,
    }
    return {
        props: {
            episodes
        }
    }
}

const Episodes = ({episodes}: EpisodesProps) => {
    const episodesList = episodes.results.map(episode => <Card key={episode.id} {...episode} >
        <h4>{`Air date: ${episode.air_date}`}</h4>
        <h4>{`Episode: ${episode.episode}`}</h4>
    </Card>)

    return (
        <PageWrapper>
            <Header/>
            {episodesList}
        </PageWrapper>
    );
};

export default Episodes;

type EpisodesProps = {
    episodes: ResponseType<EpisodeType>
}