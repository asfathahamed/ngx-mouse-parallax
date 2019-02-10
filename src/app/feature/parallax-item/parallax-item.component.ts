import { Component, ElementRef, OnInit, Input, HostBinding } from '@angular/core';
import { Coordinate, Axis, Direction, Speed } from 'src/app/model/parallax.model';
import { ParallaxService } from 'src/app/data-service/parallax.service';

@Component({
  selector: 'app-parallax-item',
  templateUrl: './parallax-item.component.html',
  styleUrls: ['./parallax-item.component.css']
})
export class ParallaxItemComponent implements OnInit {
  /**
   * @property {string} styleClass
   * you can add css style with xaxis and yaxis value
   * eg: 'left top' will add class 'left top' to class attribute
   * eg: '10 20' will add 10px left and 20px top
   */
  private styleClass = '';
  private coordinate: Coordinate;
  private parentCoordinate: Coordinate;
  // private _coordinate = {} as Coordinate;
  // private get coordinate() {
  //   return this._coordinate;
  // }
  // private set coordinate(value: Coordinate) {
  //   this._coordinate.left = value.left - this.initialCoordinate.left;
  //   this._coordinate.top = value.top - this.initialCoordinate.top;
  // }
  private element: HTMLElement;

  @Input() src: string;
  @Input() alt: string;
  @Input() direction: Direction = Direction.Default;
  @Input() position: Axis = {xAxis: 0, yAxis: 0};
  @Input() speed: Speed = {xAxis: 35, yAxis: 35};
  @HostBinding('class') classes = this.styleClass;

  constructor(
    private parallaxService: ParallaxService,
    private el: ElementRef
  ) {
      this.element = this.el.nativeElement;
  }

  ngOnInit() {
    // TODO: Get coordinate initial value
    this.parallaxService.getCoordinate().subscribe(response => {
      this.parentCoordinate = response;
      if (!this.coordinate) {
        // Set Defaults
        this.setDefaults();
        // Set Middle Point of
        this.setCenterPosition(this.position);
      }
      this.changePosition(this.parentCoordinate);
    });

  }

  private setDefaults(): any {
    const width = this.parentCoordinate.width * this.speed.xAxis;
    const height = this.parentCoordinate.height * this.speed.yAxis;
    this.coordinate = {} as Coordinate;
    this.coordinate['width'] = width === 0 ? 0 : (width / 100);
    this.coordinate['height'] = height === 0 ? 0 : (height / 100);
    this.coordinate['left'] = this.position.xAxis - this.coordinate.width / 2;
    this.coordinate['top'] = this.position.yAxis - this.coordinate.height / 2;

    // console.log({
    //   'xAxis': this.position.xAxis,
    //   'yAxis': this.position.yAxis,
    //   'width': this.coordinate.width,
    //   'height': this.coordinate.height
    // });
  }

  private setCenterPosition(position): void {
    this.el.nativeElement.style.left = position.xAxis;
    this.el.nativeElement.style.top = position.yAxis;
  }

  // TODO: adjust position from coordinate initial value
  private changePosition(mouseCoordinate: Coordinate) {
    let left = (mouseCoordinate.left * this.speed.xAxis) / 10;
    let top = (mouseCoordinate.top * this.speed.yAxis) / 10;

    if (this.direction === Direction.Inverted) {
      left = this.coordinate.left - left;
      top = this.coordinate.top - top;
    } else {
      left = this.coordinate.left + left;
      top = this.coordinate.top + top;
    }

    left = Math.ceil(left);
    top = Math.ceil(top);
    this.el.nativeElement.style.top = `${top}px`;
    this.el.nativeElement.style.left = `${left}px`;
    this.el.nativeElement.style.bottom = `auto`;
    this.el.nativeElement.style.right = `auto`;
  }
}
