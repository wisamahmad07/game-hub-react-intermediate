import { Heading } from "@chakra-ui/react";
import useGenreId from "../hooks/useGenreId";
import usePlatformId from "../hooks/usePlatformId";
import zustandGameQuery from "../store";

const GameHeading = () => {
  const genreId = zustandGameQuery((s) => s.gameQuery.genreId);
  const genreRealId = useGenreId(genreId);

  const platformId = zustandGameQuery((s) => s.gameQuery.platformId);
  const platformRealId = usePlatformId(platformId);

  const heading = `${platformRealId?.name || ""} ${
    genreRealId?.name || ""
  } Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
