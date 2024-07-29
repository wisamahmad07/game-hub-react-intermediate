import { useQuery } from "@tanstack/react-query";
import { ScreenShots } from "../entities/ScreenShots";
import ApiClient from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const apiClient = new ApiClient<ScreenShots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useScreenShots;
