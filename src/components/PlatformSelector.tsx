import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatformId from "../hooks/usePlatformId";
import usePlatforms from "../hooks/usePlatforms";
import zustandGameQuery from "../store";

const PlatformSelector = () => {
  const selectedPlatformId = zustandGameQuery((s) => s.gameQuery.platformId);
  const onSelectPlatform = zustandGameQuery((s) => s.setPlatformId);
  const { data, error } = usePlatforms();
  const platformRealId = usePlatformId(selectedPlatformId);
  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platformRealId?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
