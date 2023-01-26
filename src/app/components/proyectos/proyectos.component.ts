import { Component, ElementRef, OnInit, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  @ViewChild('cardBtns') cardBtns!: ElementRef;

  constructor(private render2:Renderer2, private ElByClassName: ElementRef) { }

  ngOnInit(): void {
  }

  activarBtns() {
    this.render2.addClass(this.cardBtns.nativeElement, "activar");
  }

  desactivarBtns() {
    this.render2.removeClass(this.cardBtns.nativeElement, "activar");
  }  

}
