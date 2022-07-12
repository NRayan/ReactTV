import { Show } from "../types";
import { requester } from "./service";

export const requests =
{
    async getShows(): Promise<Show[]> {
        try {
            const response = await requester.get("shows");
            return response.data.map(item => shortenShow(item));
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
    async getById(id: string): Promise<Show> {
        try {
            const response = await requester.get(`shows/${id}`);
            return shortenShow(response.data);
        } catch (error) {
            throw error;
        }
    }
}

function shortenShow(item: any): Show {
    const { id, name, genres, rating, image, summary, premiered, language, status } = item;
    return ({ id, name, genres, rating, image, summary, premiered, language, status });

}