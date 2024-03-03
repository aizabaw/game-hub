import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Genres from "./components/Genres";
import GameGrid from "./components/GameGrid";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  img: string;
}

export interface Genre {
  id: number;
  name: string;
}

function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(-1);

  const handleGenreSelect = (genreId: number) => {
    setSelectedGenreId(genreId);
  };

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}>
      <GridItem area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem pl='2' area={"nav"}>
        <Genres onGenreSelect={handleGenreSelect} />
      </GridItem>
      <GridItem pl='2' area={"main"}>
        <GameGrid genreId={selectedGenreId} />
      </GridItem>
    </Grid>
  );
}

export default App;
