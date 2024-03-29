import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiSvgModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiLinkModule } from "@taiga-ui/core";
import { TuiCardModule } from "@taiga-ui/experimental";
import { RepoComponent } from './repo/repo.component';
import { TuiThemeNightModule, TuiModeModule } from '@taiga-ui/core';
import { TuiPdfViewerModule } from "@taiga-ui/kit";
import { ProjectsComponent } from './projects/projects.component';
import { JourneyComponent } from './journey/journey.component';
import { TuiNavigationModule } from "@taiga-ui/experimental";
import { TuiIconModule } from "@taiga-ui/experimental";
import { TuiAvatarModule } from "@taiga-ui/kit";
import { TuiBadgeModule } from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    RepoComponent,
    ProjectsComponent,
    JourneyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiSvgModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiCardModule,
    TuiThemeNightModule,
    TuiModeModule,
    TuiPdfViewerModule,
    TuiNavigationModule,
    TuiIconModule,
    TuiAvatarModule,
    TuiBadgeModule
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
