import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { getCroppedImageUrl } from "../services/imgae-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, loading, error } = useGenres();
  if (loading) {
    return <GenreListSkeleton />;
    //return <Spinner />;
  }
  {
    error && null;
  }
  return (
    <List.Root>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px" listStyleType="none">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
