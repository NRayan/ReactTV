import { BiStar } from "react-icons/bi";
import { Container, Rate } from './styles';

type props =
    {
        value: number
    }

export function RatingTag({ value }: props) {
    return (
        <Container>
            <BiStar color='#FFAD49' size="1.5rem" />
            <Rate>{value}</Rate>
        </Container>
    )
}