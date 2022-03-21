import React from 'react';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading';

import { StatusBarHeader } from './src/components/StatusBarHeader';
import { Home } from './src/screens/Home';
import { Page } from './src/screens/Page';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBarHeader />
      <Page />
    </>
  );
}