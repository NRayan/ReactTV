import { ItemListFavorites, SearchBar } from '../../components';
import { Container, Title } from './styles';

export function Favorites() {
    return (
        <Container>
            <Title>My Favorites</Title>
            <ItemListFavorites />
        </Container>
    )
}