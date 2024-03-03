import { Text, Switch, HStack, useColorMode } from "@chakra-ui/react";

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark mode</Text>
    </HStack>
  );
};

export default DarkModeSwitch;
