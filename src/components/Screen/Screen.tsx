import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

import {Box, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
  scrollable?: boolean;
  children: React.ReactNode;
  noPaddingBottom?: boolean;
  noPaddingHorizontal?: boolean;
}

export function Screen({
  scrollable,
  children,
  noPaddingBottom,
  noPaddingHorizontal,
  ...boxProps
}: ScreenProps) {
  const behavior = Platform.OS === 'ios' ? 'padding' : undefined;
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  const {colors} = useAppTheme();
  const {top, bottom} = useAppSafeArea();

  return (
    <KeyboardAvoidingView style={$container} behavior={behavior}>
      <Container backgroundColor={colors.background}>
        <Box
          {...boxProps}
          paddingHorizontal={noPaddingHorizontal ? undefined : 's24'}
          flex={1}
          style={{
            paddingTop: top,
            paddingBottom: noPaddingBottom ? undefined : bottom,
          }}>
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const $container: ViewStyle = {
  flex: 1,
};
