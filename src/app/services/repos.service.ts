import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

interface GitRepoInfo {
  name: string,
  htmlUrl: string,
  description: string,
  topics: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ReposService{

  constructor(private http: HttpClient) { }

  getUserRepos(): Observable<any> {
    return this.http.get(`https://api.github.com/users/frapiocov/repos`);
  }
}

/* name: p.name,
            htmlUrl: p.html_url,
            description: p.description,
            topics: p.topics */