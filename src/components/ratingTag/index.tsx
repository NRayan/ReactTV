import { BiStar } from "react-icons/bi";
import { Container, Rate } from './styles';

type props =
    {
        value: number
    }

export function RatingTag({ value }: props) {
    return (
        <Container>
            <BiStar color='#FFAD49' />
            <Rate>{value}</Rate>
        </Container>
    )
}