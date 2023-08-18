import { Image, Card, CardBody, Heading, HStack } from "@chakra-ui/react"
import { Game } from "../services/game-service"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    game: Game
}

const GameCard = ({ game } : Props) => {
    return (
        <Card overflow={"hidden"}>
            <Image src={getCroppedImageUrl(game.background_image)} objectFit={"cover"} width={'100%'} height={'200px'}/>
            <CardBody>
                <Heading size={'md'}>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard