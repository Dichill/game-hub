import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Spinner,
} from "@chakra-ui/react";
import usePlatform, { Platform } from "../services/platform-service";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
    const { data, error, isLoading } = usePlatform();
    const [selected, setSelected] = useState("All");

    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {isLoading ? <Spinner /> : "Platform: " + selected}
            </MenuButton>
            <MenuList>
                {data.map((platform) => (
                    <MenuItem
                        key={platform.id}
                        onClick={() => {
                            onSelectPlatform(
                                platform != null ? platform : null
                            );
                            setSelected(platform.name);
                        }}
                    >
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
