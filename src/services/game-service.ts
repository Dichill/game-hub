import { GameQuery } from "../interface/GameQueryInterface";
import useData from "../hooks/useData";
import { Platform } from "./platform-service";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    metacritic: number;
    parent_platforms: { platform: Platform }[]
}

const useGames = (gameQuery : GameQuery) => useData<Game>('/games', {params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id, ordering: gameQuery?.sort, search: gameQuery?.search }}, [gameQuery])
export default useGames