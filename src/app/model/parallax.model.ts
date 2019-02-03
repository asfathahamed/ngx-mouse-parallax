export interface Coordinate {
  left: number;
  top: number;
  height: number;
  width: number;
}

export interface Axis {
  xAxis: 'left' | 'right' | 'center' | number;
  yAxis: 'top' | 'bottom' | 'center' | number;
}
