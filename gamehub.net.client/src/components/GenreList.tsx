import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { type Genre } from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/imgae-url";
import GenreListSkeleton from "./GenreListSkeleton";
interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();
  if (loading) {
    return <GenreListSkeleton />;
    //return <Spinner />;
  }
  {
    error && null;
  }
  return (
    <>
      <Heading fontSize="2xl" marginBottom={5}>
        Genres
      </Heading>
      <List.Root>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px" listStyleType="none">
            <HStack>
              <Image
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />

              <Button
                height="auto"
                flex={1}
                justifyContent="flex-start"
                whiteSpace="normal"
                textAlign="left"
                variant={selectedGenre?.id === genre.id ? "subtle" : "ghost"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                fontSize="lg"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
