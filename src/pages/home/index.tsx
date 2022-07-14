import { BrowserRouter } from 'react-router-dom';
import { Toolbar } from '../../components';
import { MyRoutes } from '../../routes';
import { Container } from './styles';
import BackgroundImage from "../../assets/Background.png";

export function Home() {
    return (
        <Container backgroundImagePath={BackgroundImage}>
            <BrowserRouter>
                <Toolbar />
                <MyRoutes />
            </BrowserRouter>
        </Container>
    )
}