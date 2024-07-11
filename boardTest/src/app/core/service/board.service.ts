import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  url = 'http://localhost:8080/boolSearch/terrier';

  constructor(private http: HttpClient) {}

  getPost() {
    return this.http.get(this.url);
  }
}
