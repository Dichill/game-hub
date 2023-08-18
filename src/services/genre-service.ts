import create from "../services/http-service";


export interface Genre {
    id: number;
    name: string;
}

export interface FetchGenreResponse {
    count: number
    results: Genre[]
}

export default create('/genres')