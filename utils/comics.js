export const updateComics = (comics, favorites) => {
  const comicsWithFavoritesData = comics.map(comic => {
    const isFavorite = favorites.includes(comic.id);
    
    return ({
      ...comic,
      favorite: isFavorite
    })
  }) 
  
  return comicsWithFavoritesData;
}