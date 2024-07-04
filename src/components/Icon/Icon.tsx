import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@theme';

import {BookmarkIcon} from '../../assets/icons/BookmarkIcon';
import {DownArrowIcon} from '../../assets/icons/DownArrowIcon';
import {HomeIcon} from '../../assets/icons/HomeIcon';
import {MagnifierIcon} from '../../assets/icons/MagnifierIcon';
import {NewsIcon} from '../../assets/icons/NewsIcon';
import {ProfileIcon} from '../../assets/icons/ProfileIcon';

export interface Icon {
  size: number;
  color: string;
}

const iconRegister = {
  home: HomeIcon,
  bookmark: BookmarkIcon,
  magnifier: MagnifierIcon,
  news: NewsIcon,
  profile: ProfileIcon,
  downArrow: DownArrowIcon,
};

export type IconNames = keyof typeof iconRegister;

interface IconProps {
  name: IconNames;
  /** @default 25 */
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export function Icon({
  name,
  onPress,
  size = 25,
  color = 'iconColor',
}: IconProps) {
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
