import { useNavigate } from "react-router-dom"
import LogoSVG from "../../assets/logo.svg"
import { Button, ButtonsContainer, Container, Image } from "./styles"

export function Toolbar() {

    const navigate = useNavigate();

    return (
        <Container>
            <Image src={LogoSVG} alt="logo" />
            <ButtonsContainer >
                <Button onClick={() => navigate("/")}>TV Shows</Button>
                <Button onClick={() => navigate("/Favorites")}>Favorites</Button>
                <Button onClick={() => navigate("/About")}>About</Button>
            </ButtonsContainer>
        </Container>
    )
}