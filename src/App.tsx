import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Box, Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import PlatformSelector from "./components/PlatformSelector";
import { GameQuery } from "./interface/GameQueryInterface";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <NavBar
                    search={(search) =>
                        search != "n/a" &&
                        setGameQuery({ ...gameQuery, search })
                    }
                />
            </GridItem>

            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenre={gameQuery.genre}
                        onSelectedGenre={(genre) => {
                            setGameQuery({ ...gameQuery, genre });
                        }}
                    />
                </GridItem>
            </Show>

            <GridItem area="main">
                <VStack align="start" paddingLeft={2} marginBottom={5}>
                    <GameHeading currentGenre={gameQuery.genre?.name} />
                    <HStack>
                        <Box marginRight={2}>
                            <PlatformSelector
                                onSelectPlatform={(platform) =>
                                    setGameQuery({ ...gameQuery, platform })
                                }
                            />
                        </Box>
                        <SortSelector
                            sortOrder={gameQuery.sort}
                            onSortSelect={(sort) => {
                                setGameQuery({ ...gameQuery, sort });
                            }}
                        />
                    </HStack>
                </VStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
