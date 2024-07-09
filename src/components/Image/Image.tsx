import React from 'react';
import {ImageProps as RNImageProps, Image as RNImage} from 'react-native';

const imageRegister = {
  logo: require('../../assets/images/logo.png'),
};

type imageNames = keyof typeof imageRegister;

interface ImageProps extends Omit<RNImageProps, 'source'> {
  name: imageNames;
}

export function Image({name, resizeMode = 'contain', ...props}: ImageProps) {
  return (
    <RNImage source={imageRegister[name]} resizeMode={resizeMode} {...props} />
  );
}
