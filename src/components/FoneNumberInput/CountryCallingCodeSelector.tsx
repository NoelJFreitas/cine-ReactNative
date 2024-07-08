import React from 'react';
import {ListRenderItemInfo, TextStyle} from 'react-native';

import {Country, IsoCountry} from '@domain';
import {countries} from '@utils';
import {TextInput} from 'react-native-gesture-handler';

import {Box, Icon, FlatList} from '@components';

import {CountryItemList} from './components/CountryItemList';

interface Props {
  onSelect: (iso: IsoCountry) => void;
}

export function CountryCallingCodeSelector({onSelect}: Props) {
  function renderItem({item}: ListRenderItemInfo<Country>) {
    return <CountryItemList country={item} onSelect={onSelect} />;
  }

  return (
    <Box flex={1} padding="s24">
      <Box
        height={50}
        borderColor="borderColor"
        borderWidth={1}
        borderRadius="s10"
        alignItems="center"
        paddingHorizontal="s10"
        flexDirection="row">
        <Icon name="magnifier" />
        <TextInput placeholder="Digite o nome do país" style={$textInput} />
      </Box>
      <Box paddingVertical="s32" flex={1}>
        <FlatList
          data={countries}
          renderItem={renderItem}
          emptyMessage="Não encontramos o país desejado"
        />
      </Box>
    </Box>
  );
}

const $textInput: TextStyle = {
  paddingLeft: 10,
};
