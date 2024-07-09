import React from 'react';

import {Text, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'ghost';

interface ButtonProps extends TouchableOpacityBoxProps {
  disabled?: boolean;
  preset?: ButtonPreset;
  title: string;
  loading?: boolean;
}

export function Button({
  disabled,
  preset = 'primary',
  title,
  loading,
  ...buttonProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      height={50}
      alignItems="center"
      disabled={disabled || loading}
      justifyContent="center"
      backgroundColor="primary"
      borderRadius="s10"
      {...buttonPreset.container}
      {...buttonProps}>
      <Text medium color={buttonPreset.content.color}>
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
