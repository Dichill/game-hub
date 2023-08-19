import { Heading } from "@chakra-ui/react";

interface Props {
    currentGenre: string | undefined;
}

const GameHeading = ({ currentGenre }: Props) => {
    return (
        <Heading marginY={5} fontSize="5xl">
            {currentGenre} Games
        </Heading>
    );
};

export default GameHeading;
