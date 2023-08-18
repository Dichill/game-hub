import { useEffect, useState } from "react";
import create from '../services/http-service.ts'

interface FetchDataResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const { requests, cancel, CanceledError } = create(endpoint).get<FetchDataResponse<T>>()
        
        requests.then(res => {
            setData(res.data.results)
            setLoading(false)
        }).catch(err => {
            if (err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })

        return () => cancel()
    }, [endpoint])
    return {data, error, isLoading}
}

export default useData