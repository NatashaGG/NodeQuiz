import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuizComponent } from './quiz/quiz.component';
import { PresentationsComponent } from './quiz-presentations/quiz-presentations.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';



const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: SignInComponent},
  { path: 'quiz-selector', component: QuizSelectionComponent},
  { path: 'quiz', component: QuizComponent},
  { path: 'presentations', component: PresentationsComponent},
  { path: 'results', component: QuizResultsComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }