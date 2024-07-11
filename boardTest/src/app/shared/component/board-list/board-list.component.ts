import { Component } from '@angular/core';
import { BoardService } from '../../../core/service/board.service';

@Component({
  selector: 'board-list',
  standalone: true,
  imports: [],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent {
  postList: any[] = [];

  constructor(private boardService: BoardService) {}

  show() {
    this.boardService.getPost().subscribe((response: any) => {
      console.log(response);
      this.postList = response;
    })
  }

  ngOnInit() {
    this.boardService.getPost().subscribe((response: any) => {
      console.log(response);
      this.postList = response;
    });
  }

}
