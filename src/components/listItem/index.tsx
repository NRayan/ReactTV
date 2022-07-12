import { useNavigate } from 'react-router-dom';
import { Show } from '../../types';
import { noImageURL } from '../../utils';
import { RatingTag } from '../ratingTag';
import { Container, RateContainer, Thumbnail, Title, TitleContainer } from './styles';

type props = {
    item: Show
}

export function ListItem({ item }: props) {

    const imageSource = item.image?.medium ? item.image.medium : noImageURL;
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
                    <RatingTag value={item.rating.average} />
                </RateContainer>
            }

        </Container>
    )
}