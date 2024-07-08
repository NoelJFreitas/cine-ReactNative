import React, {useEffect, useState} from 'react';
import {TextInput, TextStyle} from 'react-native';

import {IsoCountry} from '@domain';
import parsePhoneNumber, {getExampleNumber} from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';

import {Box, BoxProps} from '@components';
import {ThemeColors} from '@theme';

import {FoneCountryFlag} from './components/FoneCountryFlag';

interface FoneNumberInputProps extends BoxProps {
  countryCode: IsoCountry;
  value: string;
  onChangeText: (value: string) => void;
  onPress: () => void;
}

export function FoneNumberInput({
  countryCode,
  value,
  onChangeText,
  onPress,
  ...boxProps
}: FoneNumberInputProps) {
  const [isValid, setIsValid] = useState<boolean>();

  const borderColor: ThemeColors =
    isValid === undefined || isValid ? 'borderColor' : 'error';

  const placeholderExemple = getExampleNumber(
    countryCode,
    examples,
  )?.formatNational();

  function handleOnChangeText(text: string) {
    const phone = parsePhoneNumber(text, countryCode);
    if (phone) {
      onChangeText(phone.formatNational());
      return;
    }
    onChangeText(text);
  }

  useEffect(() => {
    const phone = parsePhoneNumber(value, countryCode);
    if (phone?.isValid()) {
      setIsValid(true);
      return;
    }
    if (value !== '') {
      setIsValid(false);
      return;
    }
    setIsValid(undefined);
  }, [countryCode, value]);

  return (
    <Box
      flexDirection="row"
      borderWidth={1}
      borderColor={borderColor}
      height={50}
      alignItems="center"
      borderRadius="s10"
      paddingHorizontal="s10"
      overflow="hidden"
      {...boxProps}>
      <FoneCountryFlag isoCode={countryCode} onPress={onPress} />
      <TextInput
        style={$textInput}
        value={value}
        onChangeText={handleOnChangeText}
        placeholder={placeholderExemple}
      />
    </Box>
  );
}

const $textInput: TextStyle = {
  flex: 1,
  paddingLeft: 5,
};
