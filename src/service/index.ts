import { Show } from "../types";
import { requester } from "./service";

export const requests =
{
    async getShows(): Promise<Show[]> {
        try {
            const response = await requester.get("shows");
            return response.data as Show[];
        } catch (error) {
            throw error;
        }
    },
    async getShowsQuery(search: string): Promise<Show[]> {
        try {
            const response = await requester.get(`search/shows?q=${search}`);
            const data: Show[] = response.data.map(item => item.show);
            return data;
        } catch (error) {
            throw error;
        }
    },
    async getById(id: string): Promise<Show> {
        try {
            const response = await requester.get(`shows/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}