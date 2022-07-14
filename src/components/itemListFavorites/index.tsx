import { useContext, useEffect, useState } from 'react';
import { ActivityIndicator, List, ListItem, SearchBar } from "..";
import { ShowsContext } from '../../context';
import { requests } from "../../service";
import { Show } from '../../types';

export function ItemListFavorites() {

    const [allData, setallData] = useState<Show[]>([]);
    const [data, setData] = useState<Show[]>([]);
    const [showsQuery, setShowsQuery] = useState("");
    const { getFavorites } = useContext(ShowsContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => { getAllData() }, []);

    async function getAllData() {
        try {
            const myFavorites = getFavorites();
            const response = await requests.getFavorites(myFavorites)
            setallData(response);
            setData(response);
            setLoading(false);
        } catch (error: any) {
            alert(error.message);
        }
    }

    async function filterData(newValue: string) {
        try {
            setData(allData.filter(x => x.name.toLowerCase().includes(newValue)))
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <>
            <SearchBar query={showsQuery} setQuery={(newValue) => { setShowsQuery(newValue); filterData(newValue) }} />
            {
                loading ?
                    <ActivityIndicator />
                    :
                    <List>
                        {
                            data.map((item) => <ListItem key={item.id} item={item} />)
                        }
                    </List>
            }

        </>
    )
}