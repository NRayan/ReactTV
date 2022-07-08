import { useEffect, useState } from 'react';
import { requests } from "../../service";
import { Container } from './styles';
import { ListItem } from "../../components"

export function ItemList() {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => { getData() }, []);

    async function getData() {
        try {
            const res = await requests.getShows(1);
            setData(res);

            console.log(res);
        } catch (error: any) {
            alert(error.message);
        }
    }

    return (
        <Container>
            {
                data.map((item) => <ListItem key={item.id} item={item}/>)
            }
        </Container>
    )
}