import {ViewStyle} from 'react-native';

import {createTheme} from '@shopify/restyle';

export const palette = {
  red: '#f34848',
  extraLightGray: '#F5f5f5',
  lightGray: '#E7E7E7',
  mediumGray: '#A6A6A6',
  darkGray: '#181818',
  white: '#FFFFFF',
  back: '#000000',
};

export const theme = createTheme({
  colors: {
    ...palette,
    primary: palette.red,
    primaryContrast: palette.white,

    background: palette.white,
    backgroundContrast: palette.darkGray,

    iconColor: palette.mediumGray,
    buttonColor: palette.red,
    borderColor: palette.lightGray,

    error: palette.red,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s15: 15,
    s16: 16,
    s20: 20,
    s24: 24,
    s32: 32,
    s40: 40,
    s48: 48,
    s56: 56,
  },
  borderRadii: {
    s5: 5,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  elevation: 10,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowRadius: 12,
  shadowOffset: {width: 0, height: -3},
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
