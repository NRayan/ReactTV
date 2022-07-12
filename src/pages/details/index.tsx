import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ActivityIndicator } from '../../components';
import { requests } from '../../service';
import { requester } from '../../service/service';
import { Show } from '../../types';
import { Container } from './styles';

export function Details() {

    const { id } = useParams();

    const [show, setShow] = useState<Show>({} as Show)

    async function getShow() {
        try {
            if (!id) return;

            const response = await requests.getById(id);
            setShow(response);

        } catch (error) {

        }
    }

    useEffect(() => { getShow() }, []);

    return (
        <Container>
            <ActivityIndicator />
        </Container>
    )
}