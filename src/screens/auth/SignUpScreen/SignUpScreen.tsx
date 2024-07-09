import React, {useRef, useState} from 'react';
import {ImageStyle} from 'react-native';

import {IsoCountry} from '@domain';

import {
  BottomSheet,
  Box,
  CountryCallingCodeSelector,
  FoneNumberInput,
  Screen,
  Text,
  Image,
  Button,
  Separator,
} from '@components';

import {SocialButton} from './components/SocialButton';

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
        <Image name="logo" style={$image} />
      </Box>

      <Box
        flex={8}
        backgroundColor="background"
        borderTopLeftRadius="s10"
        borderTopRightRadius="s10"
        paddingHorizontal="s24">
        <Text
          textAlign="center"
          marginVertical="s40"
          preset="headingMedium"
          bold>
          Acessar
        </Text>

        <Text mb="s20" bold>
          Número de contato
        </Text>

        <FoneNumberInput
          mb="s15"
          countryCode={isoCountry}
          value={phoneNumber}
          onChangeText={onChangeText}
          onPress={openBottomSheet}
        />

        <Button title="Continuar" marginBottom="s12" />
        <Text preset="paragraphCaptionLarge" textAlign="center">
          Digite o seu número de telefone cadastrado.
        </Text>
        <Text
          bold
          color="back"
          preset="paragraphCaptionLarge"
          textAlign="center">
          Caso nao tenha uma conta, clique aqui!
        </Text>
        <Separator title="Ou acesse por" marginVertical="s40" />
        <SocialButton
          socialName="google"
          title="Faça login com Google"
          mb="s15"
        />
        <SocialButton socialName="apple" title="Faça login com Apple" />
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
