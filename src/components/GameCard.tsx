import { Image, Card, CardBody, Heading } from "@chakra-ui/react"
import { Game } from "../services/game-service"

interface Props {
    game: Game
}

const GameCard = ({ game } : Props) => {
    return (
        <Card overflow="hidden">
            <Image src={game.background_image}/>
            <CardBody>
                <Heading>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard