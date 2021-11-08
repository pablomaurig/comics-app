import React, { useEffect, useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ComicItem from "../../components/ComicItem";
import DataContext from '../../globals/context/data'
import AuthContext from '../../globals/context/auth'

export default () => {
  const { comics, favorites, setFavorites } = useContext(DataContext);
  const { auth, setAuth, updateStoredAuth } = useContext(AuthContext);
  const { user, favorites: userFavorites } = auth;

  const handleFavorite = (id) => {
    let filteredFavorites;

    userFavorites.includes(id) 
      ? filteredFavorites = userFavorites.filter(comicId => comicId !== id)
      : filteredFavorites = [...userFavorites, id]

    setAuth({ user, favorites: filteredFavorites })
    setFavorites(comics.filter(comic => filteredFavorites.includes(comic.id)))

    updateStoredAuth({
      user: user,
      favorites: filteredFavorites
    })
  }
  
  useEffect(() => {
  }, [userFavorites])

  return (
    <View style={styles.container}>
      {
        favorites && favorites.length > 0
          ? (<FlatList
              data={favorites}
              renderItem={({item}) => (
                <ComicItem
                  thumbnail={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  title={item.title}
                  price={item.prices[0].price}
                  author={item.creators.items[0]?.name}
                  pages={item.pageCount}
                  saleDate={item.dates[0].date}
                  comic={item}
                  favorite={userFavorites.includes(item.id)}
                  updateFavorite={handleFavorite}
                />
              )}
            />)
          : (<Text>No tiene Favoritos seleccionados</Text>)
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f6ff",
    paddingVertical: 5
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
});