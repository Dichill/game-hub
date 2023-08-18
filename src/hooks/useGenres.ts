import { useEffect, useState } from "react"
import genreService, {FetchGenreResponse, Genre} from "../services/genre-service";

const useGames = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const { requests, cancel, CanceledError } = genreService.getAll<FetchGenreResponse>()
        
        requests.then(res => {
            setGenres(res.data.results)
            setLoading(false)
        }).catch(err => {
            if (err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })

        return () => cancel()
    }, [])
    return {genres, error, isLoading}
}

export default useGames