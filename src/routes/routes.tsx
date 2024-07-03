import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {AppTab} from './AppTab';

export function Routes() {
  return (
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  );
}
