import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigmaComponent } from "./sigma/sigma.component";
import Graph from 'graphology';
import erdosRenyi from 'graphology-generators/random/erdos-renyi';
import circular from 'graphology-layout/circular';
import { ForceAtlas2Component } from './force-atlas2/force-atlas2.component';
import {cropToLargestConnectedComponent} from 'graphology-components'
import {parse} from 'graphology-gexf/browser'
import Papa from 'papaparse'
import forceAtlas2 from 'graphology-layout-forceatlas2';
import Sigma from 'sigma'
import data from '../assets/icons/data.json'
import { AddNodeExampleComponent } from './add-node-example/add-node-example.component';
import { GexfExampleComponent } from './gexf-example/gexf-example.component';
import { CsvExampleComponent } from './csv-example/csv-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SigmaComponent,
    ForceAtlas2Component,
    AddNodeExampleComponent,
    GexfExampleComponent,
    CsvExampleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sigmaTest';
  graph: Graph;

  constructor() {
    // this.graph = erdosRenyi(Graph, { order: 10, probability: 0.5 });

    this.graph = new Graph();
  }
  renderer: Sigma | null = null;

  ngOnInit() {
    // // Load CSV file
    // Papa.parse('../assets/icons/data.csv', {
    //   download: true,
    //   header: true,
    //   delimiter: ",",
    //   complete: (results) => {
    //     console.log(results)
    //     // Build the bipartite graph
    //     results.data.forEach((line: any) => {
    //       let institution = line.name;
    //       let acronym = line.acronym;

    //       // Create the institution node
    //       this.graph.addNode(institution, {
    //         nodeType: 'institution',
    //         label: [acronym, institution].filter((s) => !!s).join(' - '),
    //       });

    //       // Extract subjects list
    //       let subjects = (
    //         line.subject_terms.match(/(?:\* )[^\n\r]*/g) || []
    //       ).map((str: any) => str.replace(/^\* /, ''));

    //       // For each subject, create the node if it does not exist yet
    //       subjects.forEach((subject: any) => {
    //         if (!this.graph.hasNode(subject))
    //           this.graph.addNode(subject, {
    //             nodeType: 'subject',
    //             label: subject,
    //           });

    //         this.graph.addEdge(institution, subject, { weight: 1 });
    //       });
    //     });
    //     console.log(this.graph);
    //     // 3. Only keep the main connected component:
    //     cropToLargestConnectedComponent(this.graph);

    //     // 4. Add colors to the nodes, based on node types:
    //     const COLORS: Record<string, string> = {
    //       institution: '#FA5A3D',
    //       subject: '#5A75DB',
    //     };
    //     this.graph.forEachNode((node, attributes) =>
    //       this.graph.setNodeAttribute(
    //         node,
    //         'color',
    //         COLORS[attributes['nodeType'] as string]
    //       )
    //     );

    //     // 5. Use degrees for node sizes:
    //     const degrees = this.graph
    //       .nodes()
    //       .map((node) => this.graph.degree(node));
    //     const minDegree = Math.min(...degrees);
    //     const maxDegree = Math.max(...degrees);
    //     const minSize = 2,
    //       maxSize = 15;
    //     this.graph.forEachNode((node) => {
    //       const degree = this.graph.degree(node);
    //       this.graph.setNodeAttribute(
    //         node,
    //         'size',
    //         minSize +
    //           ((degree - minDegree) / (maxDegree - minDegree)) *
    //             (maxSize - minSize)
    //       );
    //     });
    // }
    // });

    // JSON data
    this.graph.import(data);
  }
}

