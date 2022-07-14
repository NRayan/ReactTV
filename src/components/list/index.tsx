import { ReactNode } from 'react';
import { Container } from './styles';

type props =
    {
        children: ReactNode
    }

export function List({ children }: props) {

    return (
        <Container>
            {children}
        </Container>
    )
}