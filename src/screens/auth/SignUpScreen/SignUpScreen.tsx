import React from 'react';
import {Image, ImageStyle} from 'react-native';

import {Box, FoneInput, Screen, Text} from '@components';

export function SignUpScreen() {
  return (
    <Screen
      backgroundColor="backgroundContrast"
      noPaddingBottom
      noPaddingHorizontal>
      <Box flex={2} justifyContent="center" alignItems="center">
        <Image
          source={require('../../../assets/images/logo.png')}
          resizeMode="contain"
          style={$image}
        />
      </Box>
      <Box
        flex={8}
        backgroundColor="background"
        borderTopLeftRadius="s10"
        borderTopRightRadius="s10"
        paddingHorizontal="s24">
        <Text
          textAlign="center"
          paddingVertical="s32"
          preset="headingMedium"
          bold>
          Acessar
        </Text>
        <Text bold>Número de contato</Text>
        <FoneInput />
      </Box>
    </Screen>
  );
}

const $image: ImageStyle = {
  height: '60%',
};
