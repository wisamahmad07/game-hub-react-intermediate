import { Spinner, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
  const { data: screenShots, error, isLoading } = useScreenShots(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {screenShots?.results.map((screenShot) => (
          <Image key={screenShot.id} src={screenShot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenShots;
