import { Box } from "@chakra-ui/react"
import useGenres from "../services/genre-service"

const GenreList = () => {
    const {data} = useGenres()    

    return (
        <Box padding={10}>
            <ul>
                {data.map(genre => (<li key={genre.id}>{genre.name}</li>))}
            </ul>
        </Box>
    )
}

export default GenreList