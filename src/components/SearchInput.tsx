import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
    onChangeSearchGame: (game: string) => void;
}

const SearchInput = ({ onChangeSearchGame }: Props) => {
    const [searchGame, setSearchGame] = useState("n/a");

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            onChangeSearchGame(searchGame);
        }, 2000);

        return () => clearTimeout(delayDebounceFn);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchGame]);

    return (
        <InputGroup>
            <InputLeftElement children={<BsSearch />} />
            <Input
                borderRadius={20}
                placeholder="Search games..."
                variant="filled"
                onChange={(e) => setSearchGame(e.target.value)}
            />
        </InputGroup>
    );
};

export default SearchInput;
