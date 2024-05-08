import { CSSProperties, FC } from 'react';
import Loading from './loading';
import Cheers from './cheers';
import Church from './church';
import Facebook from './facebook';
import Instagram from './instagram';
import Ring from './ring';
import Tiktok from './tiktok';
import TwoHeart from './two-heart';
import Logo from './logo';
import Bars from './bars';
import Close from './close';
import FlowerHero from './flower-hero';
export type IconProps = {
  className?: string;
  style?: CSSProperties;
  transform?: string;
  strokeWidth?: number;
};

export type Icon = FC<IconProps>;

export type IconName =
  | 'loading'
  | 'cheers'
  | 'church'
  | 'facebook'
  | 'instagram'
  | 'ring'
  | 'tiktok'
  | 'two-heart'
  | 'logo'
  | 'bars'
  | 'close'
  | 'flower-hero';
export type IconsType = Record<IconName, Icon>;

export const Icons: IconsType = {
  loading: (props: IconProps) => {
    return <Loading {...props} />;
  },
  cheers: (props: IconProps) => {
    return <Cheers {...props} />;
  },
  church: (props: IconProps) => {
    return <Church {...props} />;
  },
  facebook: (props: IconProps) => {
    return <Facebook {...props} />;
  },
  instagram: (props: IconProps) => {
    return <Instagram {...props} />;
  },
  ring: (props: IconProps) => {
    return <Ring {...props} />;
  },
  tiktok: (props: IconProps) => {
    return <Tiktok {...props} />;
  },
  'two-heart': (props: IconProps) => {
    return <TwoHeart {...props} />;
  },
  logo: (props: IconProps) => {
    return <Logo {...props} />;
  },
  bars: (props: IconProps) => {
    return <Bars {...props} />;
  },
  close: (props: IconProps) => {
    return <Close {...props} />;
  },
  'flower-hero': (props: IconProps) => {
    return <FlowerHero {...props} />;
  }
};

export const RenderIcon = ({ name, ...reset }: IconProps & { name?: IconName }) => {
  if (!name) {
    return null;
  }
  const Icon = Icons[name];
  return <Icon {...reset} />;
};
