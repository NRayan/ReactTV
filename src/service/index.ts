import { Show } from "../types";
import { requester } from "./service";

export const requests =
{
    async getShows(): Promise<Show[]> {
        try {
            const randomPage = Math.floor(Math.random() * (100 - 1 + 1) + 1)
            const response = await requester.get(`shows?page=${randomPage}`);
            const shows = response.data.map(item => shortenShow(item));
            return shows;
        } catch (error) {
            throw error;
        }
    },
    async getShowsQuery(search: string): Promise<Show[]> {
        try {
            const response = await requester.get(`search/shows?q=${search}`);
            const data: Show[] = response.data.map(item => shortenShow(item.show));
            return data;
        } catch (error) {
            throw error;
        }
    },
    async getById(id: number): Promise<Show> {
        try {
            const response = await requester.get(`shows/${id}`);
            return shortenShow(response.data);
        } catch (error) {
            throw error;
        }
    },
    async getFavorites(ids: number[]): Promise<Show[]> {
        try {
            let Favorites: Show[] = [];

            for (let index = 0; index < ids.length; index++) {
                const newData = await this.getById(ids[index]);
                Favorites.push(newData);
            }

            return Favorites;
        } catch (error) {
            throw error;
        }
    }
}

function shortenShow(item: any): Show {
    const { id, name, genres, rating, image, summary, premiered, language, status } = item;
    return ({ id, name, genres, rating, image, summary, premiered, language, status });

}