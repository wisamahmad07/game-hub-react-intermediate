import useGenres from "./useGenres";

const useGenreId = (id?: number) => {
  const { data: genres } = useGenres();
  return genres?.results.find((genre) => id === genre.id);
};
export default useGenreId;
