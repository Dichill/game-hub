import { Box } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"

const GenreList = () => {
    const {genres, error, isLoading} = useGenres()

    return (
        <Box padding={10}>
            <ul>
                {genres.map(genre => (<li>{genre.name}</li>))}
            </ul>
        </Box>
    )
}

export default GenreList