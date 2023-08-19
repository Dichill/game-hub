import useData from "../hooks/useData";

export interface Platform {
    id: number;
    name: string;
}

const usePlatform = () => useData<Platform>('/platforms/lists/parents')
export default usePlatform