import { Image,HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
const Navbar = ()=>{
    return (
    <HStack>
    <Image src={logo} alt="Logo" boxSize="60px" />
    </HStack>
    );
}
export default Navbar;