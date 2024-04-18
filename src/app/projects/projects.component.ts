import { Component, OnInit } from '@angular/core';
import { ReposService } from '../services/repos.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  repos: any = [];
  index = 0;
  readonly itemsCount = 3;

  constructor(private repoService: ReposService) { }

  ngOnInit(): void {
    this.repoService.getUserRepos().subscribe(data => {
      this.repos = data;
      //this.repos = Array.of(data);
    });
  }

  get rounded(): number {
    return Math.floor(this.index / this.itemsCount);
}

onIndex(index: number): void {
    this.index = index * this.itemsCount;
}
}
