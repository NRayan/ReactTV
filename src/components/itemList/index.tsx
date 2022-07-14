import { useEffect, useState } from 'react';
import { ActivityIndicator, List, ListItem, SearchBar } from "../../components";
import { requests } from "../../service";

export function ItemList() {

    const [data, setData] = useState<any[]>([]);
    const [showsQuery, setShowsQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeOutId = setTimeout(() => getData(), 500);
        return () => clearTimeout(timeOutId);
    }, [showsQuery]);

    async function getData() {
        try {
            const response = !showsQuery ? await requests.getShows() : await requests.getShowsQuery(showsQuery);
            setData(response);
            setLoading(false);
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <>
            <SearchBar query={showsQuery} setQuery={setShowsQuery} />
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