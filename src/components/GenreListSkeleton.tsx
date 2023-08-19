import {
    HStack,
    Heading,
    List,
    ListItem,
    Skeleton,
    SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
    const genreNum = 16;
    const skeletons = [];
    for (let i = 1; i <= genreNum; i++) {
        skeletons.push(i);
    }

    return (
        <List>
            <Skeleton>
                <Heading textAlign="left" fontSize="2xl" marginBottom={3}>
                    Genres
                </Heading>
            </Skeleton>
            {skeletons.map((i) => (
                <ListItem key={i} paddingY="5px">
                    <HStack>
                        <Skeleton boxSize="32px" borderRadius={8} />
                        <SkeletonText width={16} />
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreListSkeleton;
