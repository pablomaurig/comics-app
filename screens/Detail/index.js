import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image} from "react-native";

export default ({ route }) => {
  const { comic } = route.params; 

  return (
    <View style={styles.container}>
      <StatusBar Style={'auto'} />
      {comic ? (
      <>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{uri: `${comic.thumbnail.path}.${comic.thumbnail.extension}`}} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{comic.title}</Text>
          <Text style={styles.price}>Price: {comic.prices[0].price}</Text>
          <Text>-----</Text>
          <Text>{comic.description}</Text>
          <Text>-----</Text>
          {comic.characters.items.length > 0 && (
            <>
              <Text>Characters:</Text>
              {comic.characters.items.map(character => <Text key={character.resourceURI}>{character.name}</Text>) }
            </>
          )}
          <Text>-----</Text>
          {comic.creators.items.length > 0 && (
            <>
              <Text>Authors:</Text>
              {comic.creators.items.map(author => <Text key={author.resourceURI}>{author.name}</Text>) }
            </>
          )}
          
        </View>
      </>
      ) : (
        'loading'
      ) }
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#ffffff",
  },
  imageContainer: {
    flex: 1,
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f0f6ff",
    paddingVertical: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  image: {
    height: 200,
    width: 130,
    borderRadius: 5,
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
});
