import LogoSVG from "../../assets/logo.svg"
import { Button, ButtonsContainer, Container, Image } from "./styles"

export function Toolbar() {

    function handleButtonClick() {
        alert("Button Clicked")
    }

    return (
        <Container>
            <Image src={LogoSVG} alt="logo" />
            <ButtonsContainer >
                <Button onClick={handleButtonClick}>All</Button>
                <Button onClick={handleButtonClick}>Movies</Button>
                <Button onClick={handleButtonClick}>Series</Button>
            </ButtonsContainer>
        </Container>
    )
}