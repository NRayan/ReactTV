import { lighten } from "polished";
import { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from 'react-icons/io5';
import { useTheme } from "styled-components";
import { ShowsContext } from "../../context";
import { Container, Input } from './styles';

export function SearchBar() {

    const { setSearchQuery } = useContext(ShowsContext);
    const [query, setQuery] = useState("");
    const { colors: { primary, secondary } } = useTheme();

    useEffect(() => {
        const timeOutId = setTimeout(() => setSearchQuery(query), 700);
        return () => clearTimeout(timeOutId);
    }, [query]);

    function handleClearInputClick() {
        setQuery("");
    }

    return (
        <Container>
            <BiSearch color={lighten(.1, secondary)} size={24} />
            <Input placeholder="Search TV Shows" value={query} onChange={(e => setQuery(e.target.value))} />
            {
                query &&
                <IoClose color={primary} size={24} onClick={handleClearInputClick} cursor="pointer" />
            }
        </Container>
    )
}