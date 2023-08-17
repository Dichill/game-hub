import { useEffect, useState } from "react"
import gameService, { FetchGameResponse, Game } from "../services/game-service"

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const { requests, cancel, CanceledError } = gameService.getAll<FetchGameResponse>()
        
        requests.then(res => {
            setGames(res.data.results)
            setLoading(false)
        }).catch(err => {
            if (err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })

        return () => cancel()
    }, [])
    return {games, error, isLoading, setGames, setError}
}

export default useGames