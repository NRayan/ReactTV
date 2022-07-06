import { ThemeProvider } from "styled-components";
import { Home } from "./pages";
import { theme } from "./theme";

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <Home />
        </ThemeProvider>
    )
}