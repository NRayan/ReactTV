import SearchSVG from "../../assets/search.svg";
import { Container, Icon, Input } from './styles';

export function SearchBar() {
    return (
        <Container>
            <Icon src={SearchSVG} />
            <Input placeholder="Search Movies or TV Shows"/>
        </Container>
    )
}