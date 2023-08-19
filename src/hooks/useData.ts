import { useEffect, useState } from "react";
import create from '../services/http-service.ts'
import { AxiosRequestConfig } from "axios";

interface FetchDataResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const { requests, cancel, CanceledError } = create(endpoint, requestConfig).get<FetchDataResponse<T>>()
        
        requests.then(res => {
            setData(res.data.results)
            setLoading(false)
        }).catch(err => {
            if (err instanceof CanceledError) return
            setError(err.message)
            setLoading(false)
        })

        return () => cancel()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps ? [...deps] : [])
    return {data, error, isLoading}
}

export default useData