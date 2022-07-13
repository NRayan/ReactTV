import { ItemListFavorites } from '../../components';
import { PageTitle } from '../../styles';
import { Container } from './styles';

export function Favorites() {
    return (
        <Container>
            <PageTitle>My Favorites</PageTitle>
            <ItemListFavorites />
        </Container>
    )
}