import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  @Input() repo:any = [];
  emoji: any = "";
  desc: any = "";

  ngOnInit(): void {
    this.desc = this.repo.description.substring(1);
    this.emoji = this.repo.description.substring(0,1);
  }
}
