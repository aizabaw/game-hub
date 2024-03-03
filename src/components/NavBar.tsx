import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkModeSwitch from "./DarkModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' margin='10px'>
      <Image boxSize='60px' src={logo}></Image>
      {/* <SearchBar /> */}
      <DarkModeSwitch />
    </HStack>
  );
};

export default NavBar;
