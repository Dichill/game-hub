import useGames from "../hooks/useGames"
import { Spinner } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

const GameGrid = () => {
    const { games, error, isLoading, setGames, setError } = useGames()

    return (
        <>
            {error && (
                <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Error Fetching the Data</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )
            }
            {isLoading && <Spinner/>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid