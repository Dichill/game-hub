import { Box } from "@chakra-ui/react"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const GameCardContainer = ({children} : Props) => {
    return (
        <Box width='339px' height='311px' borderRadius={8} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer