import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

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
} from '@shopify/restyle';

import {Theme} from '@theme';

export const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

//mesclando props dos styles do restyle
export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  TouchableOpacityProps;

//create a custom component
export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>([backgroundColor, spacing, layout, border], TouchableOpacity);
