import { Container, Thumbnail, Title, TitleContainer } from './styles';

type props = {
    item: any
}

export function ListItem({ item }: props) {

    const imageSource = item.image?.original ? item.image.original : "https://i.pinimg.com/originals/f4/0e/e2/f40ee225e3dccda7aa1a4de202b241bf.jpg";

    return (
        <Container>
            <Thumbnail src={imageSource} />
            <TitleContainer>
                <Title>{item.name}</Title>
            </TitleContainer>
        </Container>
    )
}