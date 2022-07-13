import { ReactNode } from 'react';
import { useWindowDimensions } from '../../hooks';
import { Container } from './styles';

type props =
    {
        children: ReactNode
    }

const maxColumns = 5;

export function List({ children }: props) {
    const { width } = useWindowDimensions();

    function generateColumns(): number {
        const columnsQtd = Math.floor(width / 250);
        return columnsQtd > maxColumns ? maxColumns : columnsQtd;
    }

    return (
        <Container columnQTD={generateColumns()}>
            {children}
        </Container>
    )
}