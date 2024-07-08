import React, {useRef, useState} from 'react';
import {Image, ImageStyle} from 'react-native';

import {IsoCountry} from '@domain';

import {
  BottomSheet,
  Box,
  CountryCallingCodeSelector,
  FoneNumberInput,
  Screen,
  Text,
} from '@components';

export function SignUpScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isoCountry, setIsoCountry] = useState<IsoCountry>('BR');
  const bottomSheetRef = useRef<BottomSheet>(null);

  function onChangeText(value: string) {
    setPhoneNumber(value);
  }

  function handleSetIsoCountry(iso: IsoCountry) {
    setIsoCountry(iso);
    bottomSheetRef.current?.closeBottomSheet();
  }

  function openBottomSheet() {
    bottomSheetRef.current?.openBottomSheet();
  }

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
        <FoneNumberInput
          countryCode={isoCountry}
          value={phoneNumber}
          onChangeText={onChangeText}
          onPress={openBottomSheet}
        />
      </Box>

      <BottomSheet ref={bottomSheetRef} modalTitle="Selecione o pais desejado">
        <CountryCallingCodeSelector onSelect={handleSetIsoCountry} />
      </BottomSheet>
    </Screen>
  );
}

const $image: ImageStyle = {
  height: '60%',
};
