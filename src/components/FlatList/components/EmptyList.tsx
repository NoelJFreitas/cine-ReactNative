import {Box, Text} from '@components';
import React from 'react';

interface EmptyListProps {
  message: string;
}

export function EmptyList({message}: EmptyListProps) {
  return (
    <Box justifyContent="center" alignItems="center" paddingVertical="s15">
      <Text preset="paragraphSmall" color="gray2" textAlign="center">
        {message}
      </Text>
    </Box>
  );
}
