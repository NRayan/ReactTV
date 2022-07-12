import { useNavigate } from 'react-router-dom';
import StarSVG from "../../assets/star.svg";
import { Show } from '../../types';
import { Container, Icon, Rate, RateContainer, Thumbnail, Title, TitleContainer } from './styles';

type props = {
    item: Show
}

export function ListItem({ item }: props) {

    const imageSource = item.image?.original ? item.image.original : "https://i.pinimg.com/originals/f4/0e/e2/f40ee225e3dccda7aa1a4de202b241bf.jpg";
    const navigate = useNavigate();


    function handleItemClick() {
        navigate(`/ReactTV/Details/${item.id}`, { replace: false })
    }

    return (
        <Container onClick={handleItemClick}>
            <Thumbnail src={imageSource} />
            <TitleContainer>
                <Title>{item.name}</Title>
            </TitleContainer>

            {
                item.rating.average &&
                <RateContainer>
                    <Icon src={StarSVG} />
                    <Rate>{item.rating.average}</Rate>
                </RateContainer>
            }

        </Container>
    )
}