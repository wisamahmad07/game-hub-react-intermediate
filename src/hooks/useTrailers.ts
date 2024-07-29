import { useQuery } from "@tanstack/react-query";
import { Trailers } from "../entities/Trailers";
import ApiClient from "../services/api-client";

const useTrailers = (gameId: number) => {
  const apiClient = new ApiClient<Trailers>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useTrailers;
