import usePlatforms from "./usePlatforms";

const usePlatformId = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((platform) => id === platform.id);
};

export default usePlatformId;
