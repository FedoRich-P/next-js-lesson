import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {CharacterCard} from "../../components/Card/CharacterCard/CharacterCard";
import {BaseLayout, getLayout} from "../../components/Layout/BaseLayout/BaseLayout";
import Home from "../index";

export const getStaticProps = async () => {
    const characters = await API.rickAndMorty.getCharacters();
    console.log(characters)
    return {
        props: {
            characters
        }
    }
}

const Characters = ({characters}: CharactersProps) => {

    const characterList = characters.results.map(character => (
        <CharacterCard key={character.id} character={character}/>
    ))

    return (
        <PageWrapper>
            {characterList}
        </PageWrapper>
    );
};

Characters.getLayout = getLayout;
export default Characters;

type CharactersProps = {
    characters: ResponseType<CharacterType>
}