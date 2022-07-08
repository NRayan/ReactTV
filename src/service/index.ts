import { requester } from "./service";

export const requests =
{
    async getShows() {
        try {
            const response = await requester.get("shows");
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    async getShowsQuery(search: string) {
        try {
            const response = await requester.get(`search/shows?q=${search}`);
            const data: any[] = response.data.map(item => item.show);
            return data;
        } catch (error) {
            throw error;
        }
    }
}