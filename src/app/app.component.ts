import { Component, Inject } from '@angular/core';
import { TuiPdfViewerOptions, TuiPdfViewerService } from '@taiga-ui/kit';
import { DomSanitizer } from '@angular/platform-browser';
import { TUI_IS_MOBILE } from '@taiga-ui/cdk';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { TuiContextWithImplicit } from '@taiga-ui/cdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frapiocov';
  private readonly pdf = '/assets/cv_eng_covino_francesco_pio.pdf';
  value = 0;

  constructor(
    @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,
    @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
  ) { }

  readonly icon: PolymorpheusContent<TuiContextWithImplicit<number>> = ({
    $implicit,
  }) => {
    switch ($implicit) {
      case 1:
        return 'tuiIconFrownLarge';
      case 2:
        return 'tuiIconMehLarge';
      default:
        return 'tuiIconSmileLarge';
    }
  };


  showCV(actions: PolymorpheusContent<TuiPdfViewerOptions>): void {
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
