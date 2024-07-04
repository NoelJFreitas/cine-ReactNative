import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// import {Routes} from '@routes';
import {SignUpScreen} from '@screens';
import {theme} from '@theme';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
