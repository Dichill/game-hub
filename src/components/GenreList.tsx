import { List, ListItem, Image, HStack, Button, Text } from "@chakra-ui/react"
import useGenres, { Genre } from "../services/genre-service"
import getCroppedImageUrl from "../services/image-url"
import GenreListSkeleton from "./GenreListSkeleton"

interface Props {
    onSelectedGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectedGenre} : Props) => {
    const {data, isLoading, error} = useGenres()    

    if (error) return null
    if (isLoading) return <GenreListSkeleton/>

    return (
        <List>
            {data.map(genre => (<ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Button fontSize='lg' variant='ghost' overflow='auto' onClick={() => onSelectedGenre(genre)}>
                        <Text isTruncated>
                            {genre.name}
                        </Text>
                    </Button>
                </HStack>
            </ListItem>))}
        </List>
    )
}

export default GenreList