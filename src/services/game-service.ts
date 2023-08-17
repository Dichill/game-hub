import create from "../services/http-service";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
}

export interface FetchGameResponse {
    count: number
    results: Game[]
}

export default create('/games')