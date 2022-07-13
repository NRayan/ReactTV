import { createContext, ReactNode, useState } from 'react';
import { Favorites } from '../types';
import { LT_FAVORITES_KEY } from '../utils';

type ShowsContextData = {
    getFavorites: () => Favorites;
    addFavorite: (id: number) => void;
    removeFavorite: (id: number) => void;
}

type Props = {
    children: ReactNode
}

export const ShowsContext = createContext({} as ShowsContextData);

export function ShowsContextProvider({ children }: Props) {

    function getFavorites(): Favorites {
        const items = localStorage.getItem(LT_FAVORITES_KEY);
        return items ? JSON.parse(items) : [];
    }

    function addFavorites(id: number) {
        const items = getFavorites();
        const newItems = JSON.stringify([...items, id]);
        localStorage.setItem(LT_FAVORITES_KEY, newItems);
    }

    function removeFavorite(id: number) {
        const items = getFavorites();
        const newItems = JSON.stringify(items.filter(x => x != id));
        localStorage.setItem(LT_FAVORITES_KEY, newItems);
    }

    return (
        <ShowsContext.Provider value={{
            getFavorites: getFavorites,
            addFavorite: addFavorites,
            removeFavorite: removeFavorite
        }}>
            {children}
        </ShowsContext.Provider>
    )
}