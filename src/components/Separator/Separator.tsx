import React from 'react';

import {Box, BoxProps, Text} from '@components';
import {ThemeColors} from '@theme';

export interface SeparatorProps extends BoxProps {
  title?: string;
  lineHeight?: number;
  lineColor?: ThemeColors;
}

export function Separator({
  title,
  lineHeight = 0.5,
  lineColor = 'mediumGray',
  ...boxProps
}: SeparatorProps) {
  return (
    <Box flexDirection="row" {...boxProps} alignItems="center">
      <Box height={lineHeight} backgroundColor={lineColor} flex={1} />
      {title && (
        <Text marginHorizontal="s10" preset="paragraphSmall" color="mediumGray">
          {title}
        </Text>
      )}
      <Box height={lineHeight} backgroundColor={lineColor} flex={1} />
    </Box>
  );
}
