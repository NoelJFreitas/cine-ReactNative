import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

import {Box} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  scrollable?: boolean;
  children: React.ReactNode;
}

export function Screen({scrollable, children}: ScreenProps) {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();

  return (
    <KeyboardAvoidingView style={$container} behavior={behavior}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{paddingTop: top, paddingBottom: bottom}}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const $container: ViewStyle = {
  flex: 1,
};
