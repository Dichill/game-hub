import { Button, useColorMode } from "@chakra-ui/react"
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'

const ColorModeButton = () => {
    const {toggleColorMode, colorMode} = useColorMode()

    return (
        <Button onClick={toggleColorMode}>
            {colorMode == 'light' ? <BsFillMoonStarsFill/> :  <BsSun/> }
        </Button>
    )
}

export default ColorModeButton