import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';

import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizPresentationsComponent } from './quiz-presentations/quiz-presentations.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    QuizSelectionComponent,
    QuizPresentationsComponent,
    QuizComponent,
    QuizResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClient,
    MatSliderModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }