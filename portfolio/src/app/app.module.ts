import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExperimentComponent } from './components/experiment/experiment.component';
import { EducationComponent } from './components/education/education.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ResumeComponent } from './components/resume/resume.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  {path: 'app-about', component: AboutComponent},
  {path: 'app-portfolio', component: PortfolioComponent},
  {path: 'app-resume', component: ResumeComponent},
  {path: 'app-contact', component: ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ExperimentComponent,
    EducationComponent,
    HeaderComponent,
    FooterComponent,
    ResumeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
