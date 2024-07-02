import React from 'react';
import {ScrollView, View, ViewStyle} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return <ScrollView style={{backgroundColor}}>{children}</ScrollView>;
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor, ...$container}}>{children}</View>;
}

const $container: ViewStyle = {
  flex: 1,
};
