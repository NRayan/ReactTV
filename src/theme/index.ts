export type ThemeProps = {
    colors: {
        background: string,
        primary: string,
        secondary: string,
        text: string
    },
    paddings: {
        horizontal: string,
        vertical: string,
    }
}

export const theme: ThemeProps =
{
    colors: {
        background: "#121829",
        primary: "#7B6EF6",
        secondary: "#323B54",
        text: "#FFF"
    },
    paddings: {
        horizontal: "10%",
        vertical: "15px"
    }
};