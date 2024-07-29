import { Image, Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  const first = trailers?.results[0];
  return first ? (
    <video controls poster={first.preview} src={first.data["480"]} />
  ) : null;
};

export default GameTrailer;
