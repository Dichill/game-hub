import create from "../services/http-service";

export interface Game {
    id: number;
    name: string;
}

export interface FetchGameResponse {
    count: number
    results: Game[]
}

export default create('/games')