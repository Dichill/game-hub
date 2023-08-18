import useGames from "../hooks/useGames"
import { SimpleGrid } from '@chakra-ui/react'
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import GameCard from "./GameCard"
import GameCardSkeleton from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"

const GameGrid = () => {
    // setGames, setError
    const { games, error, isLoading } = useGames()
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

    return (
        <>
            {error && (
                <Alert status='error' width={'8xl'}>
                    <AlertIcon />
                    <AlertTitle>Error Fetching the Data</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
                )
            }
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding='10px' spacing={10}>
                
                {isLoading && skeletons.map(s => (
                <GameCardContainer key={s}>
                    <GameCardSkeleton key={s} />
                </GameCardContainer>))}
                {games.map(game => {
                    return (
                        <GameCard key={game.id} game={game}/>
                    )
                })}
            </SimpleGrid>
        </>
    )
}

export default GameGrid