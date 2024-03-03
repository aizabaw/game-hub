import { Grid, GridItem, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGames from "../hooks/useGames";

interface Props {
  genreId: number;
}

const GameGrid = ({ genreId }: Props) => {
  const { games, error } = useGames(genreId);

  return (
    <>
      {/* <Select placeholder='Select option'>
        {platforms &&
          platforms.map((platform) => (
            <option key={platform.id} value={platform.id}>
              {platform.name}
            </option>
          ))}
          </Select> */}
      {error && <Text color='tomato'>{error}</Text>}
      <Grid templateColumns='repeat(4, 1fr)' rowGap={300}>
        {games &&
          games.map((game) => (
            <GridItem key={game.id} w='90%' h='10'>
              <GameCard game={game} />
            </GridItem>
          ))}
      </Grid>
    </>
  );
};

export default GameGrid;
