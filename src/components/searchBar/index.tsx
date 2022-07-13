import { lighten } from "polished";
import { useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoClose } from 'react-icons/io5';
import { useTheme } from "styled-components";
import { Container, Input } from './styles';

type props =
{
    query:string,
    setQuery:(value:string)=>void
}

export function SearchBar({query,setQuery}:props) {

    const { colors: { primary, secondary } } = useTheme();   

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