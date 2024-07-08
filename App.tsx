import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// import {Routes} from '@routes';
import {SignUpScreen} from '@screens';
import {theme} from '@theme';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <SignUpScreen />
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
