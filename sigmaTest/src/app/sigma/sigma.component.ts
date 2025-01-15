import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import Graph from 'graphology';
import { Sigma } from 'sigma'

@Component({
  selector: 'sigma',
  standalone: true,
  imports: [],
  templateUrl: './sigma.component.html',
  styleUrl: './sigma.component.css'
})
export class SigmaComponent {
  @ViewChild('container') container: ElementRef | null = null;
  @Input('graph') graph: Graph = new Graph();
  sigma?: Sigma;

  // ngAfterViewInit(): void {
  //   if(this.container) {
  //     this.sigma = new Sigma(this.graph, this.container.nativeElement, {
  //       renderLabels: true,
  //       allowInvalidContainer: true
  //     });
  //   }
  // }

  ngOnChanges(){
    console.log(this.graph)
    if (this.container) {
      this.sigma = new Sigma(this.graph, this.container.nativeElement, {
        renderLabels: true,
        allowInvalidContainer: true,
      });
    }
  }

  ngOnDestroy(): void {
    if(this.sigma) {
      this.sigma.kill();
    }
  }
}
