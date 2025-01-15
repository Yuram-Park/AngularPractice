import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import Graph from 'graphology';
import FA2LayoutSupervisor from 'graphology-layout-forceatlas2/worker';
// import {ForceAtlas2LayoutParameters} from 'graphology-layout-forceatlas2/worker'

@Component({
  selector: 'force-atlas2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './force-atlas2.component.html',
  styleUrl: './force-atlas2.component.css',
})
export class ForceAtlas2Component {
  @Input() graph?: Graph;
  // @Input() settings:
  fa2?: FA2LayoutSupervisor;
  isRunning = false;

  ngOnInit() {

    if (this.graph) {
      this.fa2 = new FA2LayoutSupervisor(this.graph, {
        settings: { gravity: 1 },
      });
    }
  }

  ngOnDestroy() {
    if (this.fa2) {
      this.fa2.kill();
    }
  }

  toggle() {
    console.log(this);
    if (this.fa2) {
      if (this.isRunning) this.fa2.stop();
      else this.fa2.start();
      this.isRunning = !this.isRunning;
    }
  }
}
