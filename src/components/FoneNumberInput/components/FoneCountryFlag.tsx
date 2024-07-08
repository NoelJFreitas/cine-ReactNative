import React from 'react';

import {IsoCountry} from '@domain';
import {getCountryCallingCode} from 'libphonenumber-js';
import CountryFlag from 'react-native-country-flag';

import {PressableBox, PressableBoxProps, Text} from '@components';

interface FoneCountryFlagProps extends PressableBoxProps {
  isoCode: IsoCountry;
  size?: number;
}

export function FoneCountryFlag({
  isoCode,
  size = 18,
  ...pressableProps
}: FoneCountryFlagProps) {
  const callingCode = getCountryCallingCode(isoCode);
  return (
    <PressableBox {...pressableProps} flexDirection="row" columnGap="s10">
      <CountryFlag isoCode={isoCode} size={size} />
      <Text preset="paragraphSmall">+{callingCode}</Text>
    </PressableBox>
  );
}
