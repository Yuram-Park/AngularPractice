import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardListComponent } from './board-list/board-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'boardTest';
}
