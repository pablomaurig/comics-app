import React, { useContext, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import BottomsTabsNavigator from './components/BottomsTabsNavigator';
import StackNavigator from './components/StackNavigator';
import AuthContext, { authData } from './globals/context/auth';

export default function App() {
  const [auth, setAuth] = useState(authData);

  const updateStoredAuth = ({ user, favorites }) => {
    const allAuth = JSON.parse(localStorage.getItem('auth')) || [];
    const currentUser = allAuth.find(auth => auth.user === user)
    let newAuthList;

    if(currentUser){
      newAuthList = allAuth.map(item => {
        return item.user === user ? { user: item.user, favorites: favorites } : item; 
      })
    } else {
      newAuthList = [...allAuth, {user, favorites}];
    }
    localStorage.setItem('auth', JSON.stringify(newAuthList))
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, updateStoredAuth }}>
      <NavigationContainer>
        { !!auth.user
        ? <BottomsTabsNavigator />
        : <StackNavigator />
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}


