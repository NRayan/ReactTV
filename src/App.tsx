import { ThemeProvider } from "styled-components";
import { SearchQueryContextProvider } from "./contexts";
import { Home } from "./pages";
import { theme } from "./theme";

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <SearchQueryContextProvider>
                <Home />
            </SearchQueryContextProvider>
        </ThemeProvider>
    )
}