import useGames from "../hooks/useGames"
import { SimpleGrid, Spinner } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import GameCard from "./GameCard"

const GameGrid = () => {
    // setGames, setError
    const { games, error, isLoading } = useGames()

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
            <SimpleGrid border={8} columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
                {games.map(game => {
                    return <GameCard key={game.id} game={game}/>
                })}
            </SimpleGrid>
        </>
    )
}

export default GameGrid