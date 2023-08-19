import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import usePlatform from "../services/platform-service"
import { useState } from "react"
import { BsChevronDown } from "react-icons/bs"

const PlatformSelector = () => {
    const { data, error, isLoading } = usePlatform()
    const [selected, setSelected] = useState('Platforms')

    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{isLoading ? <Spinner/> : selected}</MenuButton>
            <MenuList>
                {data.
                map(platform => (
                    <MenuItem key={platform.id} onClick={() => setSelected(platform.name)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector