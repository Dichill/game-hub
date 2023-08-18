import { List, ListItem, Image, HStack, Text } from "@chakra-ui/react"
import useGenres from "../services/genre-service"
import getCroppedImageUrl from "../services/image-url"
import GenreListSkeleton from "./GenreListSkeleton"

const GenreList = () => {
    const {data, isLoading} = useGenres()    

    return (
        <>
            {isLoading ? <GenreListSkeleton/> : 
                <List>
                    {data.map(genre => (<ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                            <Text fontSize='lg'>{genre.name}</Text>
                        </HStack>
                    </ListItem>))}
                </List>
            }
        </>
    )
}

export default GenreList