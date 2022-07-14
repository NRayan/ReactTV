import { useNavigate } from "react-router-dom";
import LogoSVG from "../../assets/logo.svg";
import { Button, Container, Image, ListItem, NavigationContainer, UnordernedList } from "./styles";

export function Toolbar() {
    const navigate = useNavigate();

    return (
        <Container>
            <Image src={LogoSVG} alt="logo" onClick={() => navigate("ReactTV/")} />
            <NavigationContainer >
                <UnordernedList>
                    <ListItem>
                        <Button onClick={() => navigate("ReactTV/")}>TV Shows</Button>
                    </ListItem>
                    <ListItem>
                        <Button onClick={() => navigate("ReactTV/Favorites")}>Favorites</Button>
                    </ListItem>
                </UnordernedList>
            </NavigationContainer>
        </Container>
    )
};