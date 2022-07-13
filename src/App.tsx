import { ThemeProvider } from "styled-components";
import { ShowsContextProvider } from "./context";
import { Home } from "./pages";
import { theme } from "./theme";

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <ShowsContextProvider>
                <Home />
            </ShowsContextProvider>
        </ThemeProvider>
    )
}