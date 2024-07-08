import React from 'react';
import {
  FlatList as RNFlatList,
  FlatListProps as RNFlatListProps,
  ViewStyle,
} from 'react-native';

import {ActivityIndicator, Box} from '@components';

import {EmptyList} from './components/EmptyList';

interface FlatListProps<ItemI> extends RNFlatListProps<ItemI> {
  isLoading?: boolean;
  emptyMessage: string;
}

export function FlatList<ItemI>({
  isLoading,
  emptyMessage,
  ...flatListProps
}: FlatListProps<ItemI>) {
  if (isLoading !== undefined && isLoading) {
    return (
      <Box paddingVertical="s20" justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Box>
    );
  }

  return (
    <RNFlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={<EmptyList message={emptyMessage} />}
      contentContainerStyle={$content}
      {...flatListProps}
    />
  );
}

const $content: ViewStyle = {
  // gap: 15,
};
