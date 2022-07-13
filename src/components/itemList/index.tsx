import { useContext, useEffect, useState } from 'react';
import { ListItem } from "../../components";
import { ShowsContext } from '../../context';
import { requests } from "../../service";
import { Container } from './styles';


export function ItemList() {

    const { searchQuery } = useContext(ShowsContext)
    const [data, setData] = useState<any[]>([]);

    useEffect(() => { getData() }, [searchQuery])

    async function getData() {
        try {
            let res;

            if (!searchQuery)
                res = await requests.getShows();
            else
                res = await requests.getShowsQuery(searchQuery);

            setData(res)

        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <Container>
            {
                data.map((item) => <ListItem key={item.id} item={item} />)
            }
        </Container>
    )
}