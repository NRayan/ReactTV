import { lighten } from "polished";
import { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from 'react-icons/io5';
import { useTheme } from "styled-components";
import { Container, Input } from './styles';

type props =
    {
        query: string,
        setQuery: (value: string) => void
    }

export function SearchBar({ query, setQuery }: props) {

    const { colors: { primary, secondary } } = useTheme();

    function handleClearInputClick() {
        setQuery("");
    }

    return (
        <Container>
            <BiSearch color={lighten(.1, secondary)} size={"2.4rem"} />
            <Input placeholder="Search TV Shows" value={query} onChange={(e => setQuery(e.target.value))} />
            <IoClose color={primary} size={"2.4rem"} onClick={handleClearInputClick} cursor="pointer" opacity={query ? 1 : 0} />
        </Container>
    )
}