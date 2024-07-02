import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();
type SRTExtProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTExtProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
  thin?: boolean;
  medium?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold,
  semiBold,
  thin,
  medium,
  italic,
  ...sRTExtProps
}: TextProps) {
  const fontFamily = getFontFamily(
    preset,
    bold,
    italic,
    semiBold,
    thin,
    medium,
  );

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...sRTExtProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
  thin?: boolean,
  medium?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    $fontFamily.bold;
  }

  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semibold;
    case medium:
      return $fontFamily.medium;
    case thin:
      return $fontFamily.light;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},
  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},
  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const $fontFamily = {
  black: 'Montserrat-Black',
  bold: 'Montserrat-Bold',
  light: 'Montserrat-Thin',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
  semibold: 'Montserrat-SemiBold',
};
