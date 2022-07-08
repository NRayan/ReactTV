import { Container, Thumbnail, Title, TitleContainer } from './styles';

type Props = {
    item: any
}
export function ListItem({ item }: Props) {
    return (
        <Container>
            <Thumbnail src={item.image.medium} />
            <TitleContainer>
                <Title>{item.name}</Title>
            </TitleContainer>
        </Container>
    )
}