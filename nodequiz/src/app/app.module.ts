import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';
import { QuizPresentationsComponent } from './pages/quiz-presentations/quiz-presentations.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './shared/guards/auth-guard';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HomeComponent,
    FourZeroFourComponent,
    AuthLayoutComponent,
    SigninComponent,
    QuizSelectionComponent,
    QuizPresentationsComponent,
    QuizComponent,
    QuizResultsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    MatToolbarModule,
    MenuModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CookieService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }