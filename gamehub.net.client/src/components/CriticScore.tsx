import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={3} borderRadius="4px" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
