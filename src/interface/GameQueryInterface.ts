import { Genre } from "../services/genre-service";
import { Platform } from "../services/platform-service";

export interface GameQuery {
    genre: Genre | null
    platform: Platform | null
    sort: string | null
    search: string | null
}