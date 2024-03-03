import {
  Text,
  Box,
  HStack,
  Image,
  VStack,
  StackDivider,
  Link,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
  onGenreSelect: (genreId: number) => void;
}

const Genres = ({ onGenreSelect }: Props) => {
  const { genres, error } = useGenres();

  return (
    <>
      <VStack
        divider={<StackDivider border='none' />}
        spacing={2}
        align='stretch'>
        <Text fontSize='3xl' fontWeight='bold'>
          Genres
        </Text>
        {error && <Text color='tomato'>{error}</Text>}
        {genres &&
          genres.map((genre) => (
            <HStack key={genre.id}>
              <Box>
                <Image
                  src={genre.image_background}
                  boxSize='50px'
                  borderRadius='10px'
                />
              </Box>
              <Box>
                <Link onClick={(e) => onGenreSelect(e.target.id)}>
                  <Text fontSize='md' id={genre.id.toString()}>
                    {genre.name}
                  </Text>
                </Link>
              </Box>
            </HStack>
          ))}
      </VStack>
    </>
  );
};

export default Genres;
