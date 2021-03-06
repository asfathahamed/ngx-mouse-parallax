export interface Coordinate {
  left: number;
  top: number;
  height: number;
  width: number;
}

export interface Axis {
  // xAxis: 'left' | 'right' | 'center' | number;
  // yAxis: 'top' | 'bottom' | 'center' | number;
  // TODO: Write code to support strinng input as above
  xAxis: number;
  yAxis: number;
}

export interface Speed {
  xAxis: number;
  yAxis: number;
}

export enum Direction {
  Default = 'default',
  Inverted = 'inverted',
  HOnly = 'horizontal',
  VOnly = 'vertical',
  HInverted = 'horizontal-inverted',
  VInverted = 'vertical-inverted',
  HtoV = 'horizontal-to-vertical',
  VtoH = 'vertical-to-horizontal',
}
