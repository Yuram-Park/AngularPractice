import { Component, ElementRef, ViewChild } from '@angular/core';
import Graph from 'graphology';
import Sigma from 'sigma';
import { parse } from 'graphology-gexf/browser';

@Component({
  selector: 'gexf-example',
  standalone: true,
  imports: [],
  templateUrl: './gexf-example.component.html',
  styleUrl: './gexf-example.component.css'
})
export class GexfExampleComponent {
  @ViewChild('container') container: ElementRef | null = null;

  graph: Graph;
  sigma?: Sigma;

  constructor() {

    this.graph = new Graph();

    // Load external GEXF file
    fetch('../../assets/icons/arctic.gexf')
      .then((res) => res.text())
      .then((gexf) => {
        // Parse GEXF string
        this.graph = parse(Graph, gexf);
      })
      .then(()=> {
        if (this.container) {
          this.sigma = new Sigma(this.graph, this.container.nativeElement, {
            renderLabels: true,
            allowInvalidContainer: true,
          });
        }
      })
  }

    ngOnDestroy(): void {
      if(this.sigma) {
        this.sigma.kill();
      }
    }

}
