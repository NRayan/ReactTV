import { Container } from './styles';

type Props = {
    item: any
}
export function ListItem({ item }: Props) {
    return (
        <Container>
            <h1>{item.id}</h1>
        </Container>
    )
}