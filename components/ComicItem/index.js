import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default ({ thumbnail, title, price, author, pages, saleDate, comic, favorite, updateFavorite }) => {
  const date = new Date(saleDate)
  const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
      onPress={() => { navigation.navigate('Detail', { comic: comic }) }}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: thumbnail}} />
        <View style={styles.box}>
          <Text style={styles.title}>{title}</Text>
          {author && <Text style={styles.title}>Author: {author}</Text>}
          <Text style={styles.text}>Pages: {pages}</Text>
          <Text style={styles.text}>On sale date: {`${day}/${month}/${year}`}</Text>
          <View style={styles.footer}>
            <Text style={styles.price}>{price === 0 ? 'Not for sale': `u$d: ${price}`}</Text>
            <Text onPress={() => updateFavorite(comic.id)} style={styles.price}>{favorite ? '❤' : '♡'}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#fff",
    alignItems: 'flex-start',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10
  },
  image: {
    marginRight: 10,
    width: 90,
    height: 130,
    borderRadius: 3,
  },
  box: {
    flex: 1,
    flexDirection: 'collumn',
    height: '100%'
  },  
  title: {
    color: 'black',
    fontWeight: 600,
    marginBottom: 6
  },
  text: {
    color: 'gray',
    marginBottom: 3
  },
  footer: {
    flexDirection: 'row',
    marginTop: 'auto',
    justifyContent: 'space-between'
  },
});