import React from 'react';

import {Path, Svg} from 'react-native-svg';

import {Icon} from '@components';

export function DownArrowIcon({color, size}: Icon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7 10L12 15L17 10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
