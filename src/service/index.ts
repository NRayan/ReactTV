import { requester } from "./service";

export const requests =
{
    async getShows(page: number) {
        try {
            const response = await requester.get(`shows?page=${page}`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
}