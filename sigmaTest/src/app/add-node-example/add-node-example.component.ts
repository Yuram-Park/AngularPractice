import { Component, ElementRef, ViewChild } from '@angular/core';
import Graph from 'graphology';
import Sigma from 'sigma';

@Component({
  selector: 'add-node-example',
  standalone: true,
  imports: [],
  templateUrl: './add-node-example.component.html',
  styleUrl: './add-node-example.component.css'
})
export class AddNodeExampleComponent {

  @ViewChild('container') container: ElementRef | null = null;

  graph: Graph;
  sigma?: Sigma;

  constructor() {
    this.graph = new Graph();

    this.graph.addNode("1", {label: "Node 1", x: 0, y: 0, size: 10, color: "blue"});
    this.graph.addNode("2", {label: "Node 2", x: 1, y: 1, size: 20, color: "red"});
    this.graph.addEdge("1", "2", {size: 5, color: "purple"})
  }

  ngAfterViewInit(): void {
    if(this.container) {
      this.sigma = new Sigma(this.graph, this.container.nativeElement, {
        renderLabels: true,
        allowInvalidContainer: true
      });
    }
  }

  ngOnDestroy(): void {
    if(this.sigma) {
      this.sigma.kill();
    }
  }

}
