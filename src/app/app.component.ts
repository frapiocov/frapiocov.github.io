import { Component, Inject, OnInit } from '@angular/core';
import { ReposService } from './services/repos.service';
import { TuiBrightness } from '@taiga-ui/core';
import { TuiPdfViewerOptions, TuiPdfViewerService } from '@taiga-ui/kit';
import { DomSanitizer } from '@angular/platform-browser';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frapiocov';
  repos: any = [];
  private readonly pdf = '/assets/cv_eng_covino_francesco_pio.pdf';


  constructor(private repoService: ReposService,
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
    @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
  ) { }

  ngOnInit(): void {
    this.repoService.getUserRepos().subscribe(data => {
      this.repos = data;
      //this.repos = Array.of(data);
    });
  }

  show(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {
    this.pdfService
      .open(
        this.sanitizer.bypassSecurityTrustResourceUrl(
          this.isMobile
            ? `https://drive.google.com/viewerng/viewer?embedded=true&url={this.pdf}`
            : this.pdf,
        ),
        {
          label: 'My Curriculum',
          actions,
        },
      )
      .subscribe();
  }

}
