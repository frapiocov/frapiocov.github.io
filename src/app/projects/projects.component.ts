import { Component, OnInit } from '@angular/core';
import { ReposService } from '../services/repos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: any = [];

  constructor(private repoService: ReposService) { }

  ngOnInit(): void {
    this.repoService.getUserRepos().subscribe(data => {
      this.repos = data;
      //this.repos = Array.of(data);
    });
  }
}
