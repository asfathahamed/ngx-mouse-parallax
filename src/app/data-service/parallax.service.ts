import { Injectable } from '@angular/core';
import { Coordinate, Axis } from '../model/parallax.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParallaxService {
  public position: Axis = {
    xAxis: 0,
    yAxis: 0
  };
  public coordinate: Coordinate = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };

  private coordinateSubject = new BehaviorSubject<Coordinate>(this.coordinate);

  constructor() { }

  setCoordinate(coordinate: Coordinate) {
    this.coordinate = coordinate;
    this.coordinateSubject.next(this.coordinate);
  }

  getCoordinate(): Observable<Coordinate> {
    return this.coordinateSubject;
  }
}
