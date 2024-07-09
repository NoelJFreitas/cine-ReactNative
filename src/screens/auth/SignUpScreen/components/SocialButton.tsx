import React from 'react';

import {
  Icon,
  IconNames,
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';

type Filter<T, U> = T extends U ? T : never;
interface SocialButtonProps extends TouchableOpacityBoxProps {
  socialName: Filter<IconNames, 'google' | 'apple'>;
  title: string;
}

export function SocialButton({
  socialName,
  title,
  ...touchableProps
}: SocialButtonProps) {
  return (
    <TouchableOpacityBox
      flexDirection="row"
      borderColor="borderColor"
      borderWidth={1}
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s10"
      paddingHorizontal="s10"
      columnGap="s15"
      overflow="hidden"
      {...touchableProps}>
      <Icon name={socialName} size={20} />
      <Text semiBold preset="paragraphLarge">
        {title}
      </Text>
    </TouchableOpacityBox>
  );
}
