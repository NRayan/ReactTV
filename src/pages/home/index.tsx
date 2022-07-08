import { BrowserRouter } from 'react-router-dom';
import { Toolbar } from '../../components';
import { MyRoutes } from '../../routes';
import { Container } from './styles';

export function Home() {
    return (
        <BrowserRouter>
            <Container>
                <Toolbar />
                <MyRoutes />
            </Container>
        </BrowserRouter>
    )
}