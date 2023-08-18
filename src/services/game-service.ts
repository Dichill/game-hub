import create from "../services/http-service";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[]
}

export interface FetchGameResponse {
    count: number
    results: Game[]
}

export default create('/games')