import { HStack, List, ListItem, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const genres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <List.Root height="20px">
      {genres.map((genre) => (
        <ListItem key={genre} paddingY="5px" listStyleType="none">
          <HStack>
            <SkeletonText fontSize="lg"></SkeletonText>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreListSkeleton;
