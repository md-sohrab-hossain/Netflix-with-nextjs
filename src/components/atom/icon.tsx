import { mapModifiers } from 'libs/component';
import React from 'react';

export const ICON_SHAPES = [
  'play-button',
  'expand-more',
  'expand-less',
  'arrow-left',
  'arrow-right',
  'resize',
  'close',
] as const;

export type IconShape = typeof ICON_SHAPES[number];

export interface IconProps {
  name: typeof ICON_SHAPES[number];
  onClick?: React.MouseEventHandler;
}

export const Icon: React.FC<IconProps> = ({ name, onClick }) => (
  <i onClick={onClick} className={mapModifiers('a-icon', name)} />
);
