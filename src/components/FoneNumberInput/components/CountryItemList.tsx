import React from 'react';

import {Country} from '@domain';
import {CountryCode} from 'libphonenumber-js';
import CountryFlag from 'react-native-country-flag';

import {Text, TouchableOpacityBox} from '@components';

interface Props {
  country: Country;
  onSelect: (iso: CountryCode) => void;
}

export function CountryItemList({country, onSelect}: Props) {
  const {iso, name} = country;
  return (
    <TouchableOpacityBox
      flexDirection="row"
      paddingVertical="s14"
      onPress={() => onSelect(iso)}>
      <CountryFlag isoCode={iso} size={20} />
      <Text paddingLeft="s14">{name}</Text>
    </TouchableOpacityBox>
  );
}
