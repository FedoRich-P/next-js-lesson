import {PageWrapper} from "../../../components/PageWrapper/PageWrapper";
import {API} from "../../../assets/api/api";
import {CharacterCard} from "../../../components/Card/CharacterCard/CharacterCard";
import {getLayout} from "../../../components/Layout/BaseLayout/BaseLayout";
import {CharacterType} from "../../../assets/api/rick-and-morty-api";
import {GetStaticPaths, GetStaticProps} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const {results} = await API.rickAndMorty.getCharacters()

    const paths = results.map(({id}) => ({params: {id: id.toString()}}))

    return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const {id} = params || {};
    const character = await API.rickAndMorty.getCharacter(id as string);
    if (!character) return {notFound: true};
    return {
        props: {
            character
        }
    }
}

const Character = ({character}: CharacterProps) => {

    return (
        <PageWrapper>
            <CharacterCard character={character}/>
        </PageWrapper>
    );
};

Character.getLayout = getLayout;
export default Character;

type CharacterProps = {
    character: CharacterType
}