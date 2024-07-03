import React from 'react';

import {Circle, Path, Svg} from 'react-native-svg';

import {Icon} from '@components';

export function ProfileIcon({color, size}: Icon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx="12" cy="6" r="4" fill={color} />
      <Path
        d="M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z"
        fill={color}
      />
    </Svg>
  );
}
