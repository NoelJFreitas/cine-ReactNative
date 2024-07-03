import React from 'react';
import {TextStyle} from 'react-native';

import {createText} from '@shopify/restyle';

import {Theme} from '../../theme/theme';

const SRText = createText<Theme>();
type SRTExtProps = React.ComponentProps<typeof SRText>;

export interface TextProps extends SRTExtProps {
  preset?: TextVariants;
  semiBold?: boolean;
  medium?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  semiBold,
  medium,
  ...sRTExtProps
}: TextProps) {
  const fontFamily = getFontFamily(preset, semiBold, medium);

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
  semiBold?: boolean,
  medium?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    $fontFamily.semibold;
  }

  switch (true) {
    case semiBold:
      return $fontFamily.semibold;
    case medium:
      return $fontFamily.medium;
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
  headingLarge: {fontSize: 40},
  headingMedium: {fontSize: 32},
  headingSmall: {fontSize: 20},
  paragraphLarge: {fontSize: 18},
  paragraphMedium: {fontSize: 17},
  paragraphSmall: {fontSize: 15},
  paragraphCaption: {fontSize: 12},
  paragraphCaptionSmall: {fontSize: 10},
};

export const $fontFamily = {
  medium: 'SFProDisplay-Medium',
  semibold: 'Montserrat-Semibold',
  regular: 'SFProDisplay-Regular',
};
