import {
  Component,
  ElementRef,
  Input,
  OnInit,
  HostListener
} from '@angular/core';
import { Coordinate } from 'src/app/model/parallax.model';
import { ParallaxService } from 'src/app/data-service/parallax.service';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.css']
})
export class ParallaxComponent implements OnInit {
  private host: HTMLElement;

  @Input() className: string;
  @HostListener('mousemove', ['$event'])
  onMouseMove(e) {
    const left = e.pageX - this.host.offsetLeft;
    const top = e.pageY - this.host.offsetTop;
    const width = this.host.clientWidth;
    const height = this.host.clientHeight;
    this.parallaxService.setCoordinate({
      left: (left * 100) / width,
      top: (top * 100) / height,
      width: width,
      height: height,
    });
  }

  constructor(private elRef: ElementRef, private parallaxService: ParallaxService) {
    this.host = this.elRef.nativeElement;
  }

  ngOnInit() {
    this.className = this.className
      ? `parallax-wrapper ${this.className}`
      : 'parallax-wrapper';
  }
}
