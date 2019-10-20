/*
=====================================
  ; Title: app.routing.ts
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: app.routing.ts
======================================
*/
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './shared';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth-guard';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { SigninComponent } from './pages/signin/signin.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';
import { QuizPresentationsComponent } from './pages/quiz-presentations/quiz-presentations.component';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                component: SigninComponent,
            }
        ]
    },
    {
        path: 'quiz-selection',
        component: BaseLayoutComponent,
        children: [
            {
                path: '',
                component: QuizSelectionComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'quiz-presentations/:quizId',
                component: QuizPresentationsComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: 'session',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'signin',
                component: SigninComponent
            },
            {
                path: 'four-zero-four',
                component: FourZeroFourComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/four-zero-four'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}