import {API} from "../../assets/api/api";
import {CharacterType, ResponseType} from "../../assets/api/rick-and-morty-api";
import {Header} from "../../components/Header/Header";
import Image from "next/image";
import {PageWrapper} from "../../components/PageWrapper/PageWrapper";
import {Card} from "../../components/Card/Card";

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

    const characterList = characters.results.map(character => <Card key={character.id} {...character} >
        <Image src={character.image} alt={character.name} width={300} height={300} priority />
        <h4>{`Status: ${character.status}`}</h4>
        <h4>{`Species: ${character.species}`}</h4>
    </Card>)

    return (
        <PageWrapper>
            <Header/>
            {characterList}
        </PageWrapper>
    );
};

export default Characters;

type CharactersProps = {
    characters: ResponseType<CharacterType>
}