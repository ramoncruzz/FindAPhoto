import React from 'react';
import {Div, Image} from 'react-native-magnus';

export interface Props {
  children?: React.ReactNode;
  url: string;
  roundedBorder?: boolean;
  circleShape?: boolean;
  shadow?: boolean;
  width?: number | string;
  height?: number | string;
}

const ImageComponent: React.FC<Props> = (props): JSX.Element => {
  const {url, width, height, roundedBorder, circleShape, shadow} = props;
  if (props.children) {
    return (
      <Div
        shadow={shadow ? 'sm' : undefined}
        rounded={roundedBorder ? 'md' : circleShape ? 'xl' : undefined}
        h={height}
        w={width}
        bgImg={{uri: url}}>
        {props.children}
      </Div>
    );
  }
  return (
    <Image
      resizeMode="contain"
      rounded={roundedBorder ? 'circle' : undefined}
      h={height}
      w={width}
      source={{uri: url}}
    />
  );
};

export default ImageComponent;
