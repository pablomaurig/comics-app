import React, { useContext, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { Button } from 'react-native';
import AuthContext from '../../globals/context/auth'


WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const { auth, setAuth, updateStoredAuth } = useContext(AuthContext);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1038621268976-duq5u9l3h3pmi0luk1a93o9ecrqmlidn.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
  });
  // https://www.googleapis.com/oauth2/v1/userinfo?access_token=${authentication.accessToken} 

  // 1038621268976-duq5u9l3h3pmi0luk1a93o9ecrqmlidn.apps.googleusercontent.com
  // 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

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;

      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt-json&access_token=${authentication.accessToken}`)
        .then(res => res.json())
        .then(data => {console.log('user data', data)})
    }
  }, [response]);

  const getStoredUser = (userEmail) => {
    const allAuth = JSON.parse(localStorage.getItem('auth')) || [];
    const currentUser = allAuth.find(auth => auth.user === userEmail)

    return currentUser ? currentUser : null
  }

  const handleLogIn = () => {
    // promptAsync();
    const storedUser = getStoredUser('name@mail.com');

    setAuth({
      user: 'name@mail.com',
      favorites: storedUser ? storedUser.favorites : []
    })
    updateStoredAuth({
      user: 'name@mail.com',
      favorites: storedUser ? storedUser.favorites : []
    })
  }

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={handleLogIn}
    />
  );
}