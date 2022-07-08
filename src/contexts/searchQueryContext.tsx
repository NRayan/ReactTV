import { createContext, ReactNode, useState } from 'react';

type SearchQueryContextData = {
    searchQuery: string;
    setSearchQuery: (newValue: string) => void
}

type Props = {
    children: ReactNode
}

export const SearchQueryContext = createContext({} as SearchQueryContextData);

export function SearchQueryContextProvider({ children }: Props) {

    const [query, setQuery] = useState<string>("");

    return (
        <SearchQueryContext.Provider value={{ searchQuery: query, setSearchQuery: setQuery }}>
            {children}
        </SearchQueryContext.Provider>
    )
}