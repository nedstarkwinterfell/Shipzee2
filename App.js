import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from './LoginScreen';
import ShipmentDetails from './ShipmentDetails';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  if (!loggedIn) {
    return <LoginScreen onLoginSuccess={(userData) => {
      setLoggedIn(true);
      setUser(userData);
    }} />;
  }

  return <ShipmentDetails user={user} />;
}