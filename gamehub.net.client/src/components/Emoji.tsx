import { Image, type ImageProps } from "@chakra-ui/react";
import bullEye from "../assets/bullseye.png";
import thumbsUp from "../assets/like.png";
import meh from "../assets/meh.png";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullEye, alt: "exeptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
