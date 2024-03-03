import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

const GameCard = ({ game }: { game: Game }) => {
  const { name, slug, background_image } = game;

  return (
    <>
      <Card maxW='sm'>
        <CardBody>
          <Image src={background_image} alt={slug} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{name}</Heading>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
