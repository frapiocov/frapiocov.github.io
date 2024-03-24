import { Component, OnInit } from '@angular/core';
import { ReposService } from './services/repos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frapiocov';
  repos: any = [];

  constructor(private repoService: ReposService){}

  ngOnInit(): void {
    this.repoService.getUserRepos().subscribe(data => {
      this.repos = data; 
      //this.repos = Array.of(data);
    });
  }

}
