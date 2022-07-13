import { ReactNode } from 'react';
import { useWindowDimensions } from '../../hooks';
import { Container } from './styles';

type props =
    {
        children: ReactNode
    }

const maxColumns = 5;
const minColumns = 3;

export function List({ children }: props) {
    const { width } = useWindowDimensions();

    function generateColumns(): number {
        const division = Math.floor(width / 250);
        const columnsQtd = Math.min(Math.max(division, minColumns), maxColumns);
        return columnsQtd;
    }

    return (
        <Container columnQTD={generateColumns()}>
            {children}
        </Container>
    )
}