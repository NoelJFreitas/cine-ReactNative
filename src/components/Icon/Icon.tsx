import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MagnifierIcon} from '../../assets/icons/MagnifierIcon';

export interface Icon {
  size: number;
  color: string;
}

const iconRegister = {
  home: HomeIcon,
  Bookmark: BookmarkIcon,
  magnifier: MagnifierIcon,
};

type IconNames = keyof typeof iconRegister;

interface IconProps {
  name: IconNames;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export function Icon({name, onPress, size = 25, color = 'gray1'}: IconProps) {
  const SVGIcon = iconRegister[name];
  const {colors} = useAppTheme();

  if (onPress) {
    return (
      <Pressable onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}
