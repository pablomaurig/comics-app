import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Detail from '../../screens/Detail';
import Favorites from '../../screens/Favorites';
import DataContext, { data } from '../../globals/context/data';

export default () => {
  const [comics, setComics] = useState([...data.comics]);
  const [favorites, setFavorites] = useState([...data.favorites]);
  const Tabs = createBottomTabNavigator();

  return (
    <DataContext.Provider value={{ comics, favorites, setComics, setFavorites }}>
      <Tabs.Navigator>
          <Tabs.Screen name={'Home'} component={Home} />
          <Tabs.Screen name={'Favorites'} component={Favorites} />
          <Tabs.Screen name={'Detail'} component={Detail}  options={{
            tabBarButton: () => null,
            tabBarVisible: false,
          }} />
        </Tabs.Navigator>
      </DataContext.Provider>
  )
}