import {
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import {
  createBox,
  createRestyleComponent,
  backgroundColor,
  spacing,
  layout,
  border,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
  spacingShorthand,
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

type RestyleTypes = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export type TouchableOpacityBoxProps = TouchableOpacityProps & RestyleTypes;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export type PressableBoxProps = PressableProps & RestyleTypes;
export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  Pressable,
);
