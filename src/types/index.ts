export type Show =
    {
        id: number,
        name: string,
        genres: string[],
        rating: {
            average: number
        }
        image: {
            medium: string,
            original: string
        },
        summary: string,
        premiered: string,
        language: string,
        status: string
    }

export type Favorites = number[];