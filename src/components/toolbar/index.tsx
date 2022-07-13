import { useNavigate } from "react-router-dom";
import LogoSVG from "../../assets/logo.svg";
import { Button, ButtonsContainer, Container, Image } from "./styles";

export function Toolbar() {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src={LogoSVG} alt="logo" onClick={() => navigate("ReactTV/")} />
            <ButtonsContainer >
                <Button onClick={() => navigate("ReactTV/")}>TV Shows</Button>
                <Button onClick={() => navigate("ReactTV/Favorites")}>Favorites</Button>
                <Button onClick={() => navigate("ReactTV/About")}>About</Button>
            </ButtonsContainer>
        </Container>
    )
};