import { useState } from "react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import PlatformSelector from "./components/PlatformSelector";
import { GameQuery } from "./interface/GameQueryInterface";
import SortSelector from "./components/SortSelector";

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
                <NavBar />
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
                <HStack paddingLeft={2} marginBottom={5}>
                    <PlatformSelector
                        onSelectPlatform={(platform) =>
                            setGameQuery({ ...gameQuery, platform })
                        }
                    />
                    <SortSelector
                        sortOrder={gameQuery.sort}
                        onSortSelect={(sort) => {
                            setGameQuery({ ...gameQuery, sort });
                        }}
                    />
                </HStack>
                <GameGrid gameQuery={gameQuery} />
            </GridItem>
        </Grid>
    );
}

export default App;
