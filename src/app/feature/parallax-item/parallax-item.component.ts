import { Component, ElementRef, OnInit, Input, HostBinding } from '@angular/core';
import { Coordinate, Axis } from 'src/app/model/parallax.model';
import { ParallaxService } from 'src/app/data-service/parallax.service';
import { t } from '@angular/core/src/render3';

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
  private styleClass = 'h-center bottom';
  private coordinate: Coordinate;
  private element: HTMLElement;

  @Input() src: string;
  @Input() alt: string;
  @Input() inverted = false;
  @Input() position: Axis = {xAxis: 0, yAxis: 0};
  @HostBinding('class') classes = this.styleClass;

  constructor(
    private parallaxService: ParallaxService,
    private el: ElementRef
  ) {
      this.element = this.el.nativeElement;
  }

  ngOnInit() {
    this.parallaxService.getCoordinate().subscribe(response => {
      this.coordinate = response;
      // console.log('Coordination', this.coordinate);
      this.changePosition();
    });
    if (this.inverted) {
      this.el.nativeElement.style.right = this.position.xAxis;
      this.el.nativeElement.style.bottom = this.position.yAxis;
    } else {
      this.el.nativeElement.style.left = this.position.xAxis;
      this.el.nativeElement.style.left = this.position.yAxis;
    }
  }

  public changePosition() {
    const left = Math.ceil(this.coordinate.left);
    const top = Math.ceil(this.coordinate.top);
    if (this.inverted) {
      this.el.nativeElement.style.bottom = top + '%';
      this.el.nativeElement.style.right = left + '%';
    } else {
      this.el.nativeElement.style.top = top + '%';
      this.el.nativeElement.style.left = left + '%';
    }
  }
}
