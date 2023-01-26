import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import Typewriter  from 't-writer.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    /* window.addEventListener('load', AOS.refresh); */
  }

  ngAfterViewInit(): void {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;

    const writer = new Typewriter(target, {
      loop: false,
      typeColor: 'white',
      typeSpeed: 200
    });
    
    writer
      .changeCursorColor ('white')
      .type('Yair Reynaldo')
      .removeCursor()
      /* .rest(500) */
      .start();
  }

}
