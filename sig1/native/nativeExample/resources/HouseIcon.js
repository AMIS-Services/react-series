import * as React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { Path } from 'react-native-svg';

export function HouseIcon(props) {
  const icon = {
    HouseIcon: {
      svg: <Path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
      viewBox: '0 0 50 50'
    }
  }

  return (
    <SvgIcon {...props} name="HouseIcon" svgs={icon} />
  );
}