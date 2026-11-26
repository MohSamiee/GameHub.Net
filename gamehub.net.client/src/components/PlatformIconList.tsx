import type { Platform } from "../hooks/usePlatforms";
import { HStack, Icon } from "@chakra-ui/react";
import {
  FaPlaystation,
  FaWindows,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsNintendoSwitch, BsGlobe } from "react-icons/bs";
import { SiSega } from "react-icons/si";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    android: FaAndroid,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    sega: SiSega,
  };
  {
    return (
      <HStack>
        {platforms.map((p) => {
          const PlatformIcon = iconMap[p.slug];

          if (!PlatformIcon) {
            console.log(p);
            return null;
          }

          return (
            <Icon key={p.id} color="gray.500">
              <PlatformIcon />
            </Icon>
          );
        })}
      </HStack>
    );
  }
};

export default PlatformIconList;
