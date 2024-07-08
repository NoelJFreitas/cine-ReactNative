import React from 'react';

import {Box, Icon, Text} from '@components';

interface BottomSheetHeaderProps {
  title?: string;
  onPressClose: () => void;
}

export function BottomSheetHeader({
  title,
  onPressClose,
}: BottomSheetHeaderProps) {
  return (
    <Box flexDirection="row" justifyContent="center" paddingBottom="s10">
      <Text preset="paragraphSmall" semiBold>
        {title}
      </Text>
      <Box position="absolute" right={20}>
        <Icon name="close" color="iconColor" onPress={onPressClose} />
      </Box>
    </Box>
  );
}
