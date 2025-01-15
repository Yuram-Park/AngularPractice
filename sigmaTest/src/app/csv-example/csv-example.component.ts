import { Component, ElementRef, ViewChild } from '@angular/core';
import Graph from 'graphology';
import Papa from 'papaparse';
import Sigma from 'sigma';
import { cropToLargestConnectedComponent } from 'graphology-components';
import circular from 'graphology-layout/circular';
import forceAtlas2 from 'graphology-layout-forceatlas2';

@Component({
  selector: 'csv-example',
  standalone: true,
  imports: [],
  templateUrl: './csv-example.component.html',
  styleUrl: './csv-example.component.css',
})
export class CsvExampleComponent {
  @ViewChild('container') container: ElementRef | null = null;

  graph: Graph;
  sigma?: Sigma;

  constructor() {
    this.graph = new Graph();

    // 1. Load CSV file:(convert CSV to JSON)
    Papa.parse<{ name: string; acronym: string; subject_terms: string }>(
      '../assets/icons/data.csv',
      {
        download: true,
        header: true,
        delimiter: ',',
        complete: (results) => {
          // 2. Build the bipartite graph:
          results.data.forEach((line) => {
            const institution = line.name;
            const acronym = line.acronym;

            // Create the institution node:
            this.graph.addNode(institution, {
              nodeType: 'institution',
              label: [acronym, institution].filter((s) => !!s).join(' - '),
            });

            // Extract subjects list:
            const subjects = (
              line.subject_terms.match(/(?:\* )[^\n\r]*/g) || []
            ).map((str) => str.replace(/^\* /, ''));

            // For each subject, create the node if it does not exist yet:
            subjects.forEach((subject) => {
              if (!this.graph.hasNode(subject))
                this.graph.addNode(subject, {
                  nodeType: 'subject',
                  label: subject,
                });

              this.graph.addEdge(institution, subject, { weight: 1 });
            });
          });

          // 3. Only keep the main connected component:
          cropToLargestConnectedComponent(this.graph);

          // 4. Add colors to the nodes, based on node types:
          const COLORS: Record<string, string> = {
            institution: '#FA5A3D',
            subject: '#5A75DB',
          };
          console.log(this.graph)
          this.graph.forEachNode((node, attributes) =>
            this.graph.setNodeAttribute(
              node,
              'color',
              COLORS[attributes['nodeType'] as string]
            )
          );

console.log(this.graph);
          // 5. Use degrees for node sizes:
          const degrees = this.graph
            .nodes()
            .map((node) => this.graph.degree(node));
          const minDegree = Math.min(...degrees);
          const maxDegree = Math.max(...degrees);
          const minSize = 2,
            maxSize = 15;
          this.graph.forEachNode((node) => {
            const degree = this.graph.degree(node);
            this.graph.setNodeAttribute(
              node,
              'size',
              minSize +
                ((degree - minDegree) / (maxDegree - minDegree)) *
                  (maxSize - minSize)
            );
          });

          // 6. Position nodes on a circle, then run Force Atlas 2 for a while to get
          //    proper graph layout:
          circular.assign(this.graph);
          const settings = forceAtlas2.inferSettings(this.graph);
          forceAtlas2.assign(this.graph, { settings, iterations: 600 });

          // 7. Hide the loader from the DOM:
          const loader = document.getElementById('loader') as HTMLElement;
          loader.style.display = 'none';

          // 8. Finally, draw the graph using sigma:
          const container = document.getElementById(
            'container'
          ) as HTMLElement;
          this.sigma = new Sigma(this.graph, container);
        },
      }
    );
  }

  ngOnDestroy(): void {
    if (this.sigma) {
      this.sigma.kill();
    }
  }
}
