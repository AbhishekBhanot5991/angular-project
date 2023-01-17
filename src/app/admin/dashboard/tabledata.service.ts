import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TabledataService {
  url = "assets/students.json"
  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }
}
