import { useContext, useEffect, useState } from "react";
import SearchSVG from "../../assets/search.svg";
import { SearchQueryContext } from "../../contexts";
import { Container, Icon, Input } from './styles';

type props =
    {
        placeholder: string
    }

export function SearchBar({placeholder}:props) {

    const { setSearchQuery } = useContext(SearchQueryContext);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timeOutId = setTimeout(() => setSearchQuery(query), 700);
        return () => clearTimeout(timeOutId);
    }, [query]);

    return (
        <Container>
            <Icon src={SearchSVG} />
            <Input placeholder={placeholder} onChange={(e => setQuery(e.target.value))} />
        </Container>
    )
}