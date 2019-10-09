import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth-guard';
import { SigninComponent } from './pages/signin/signin.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { QuizSelectionComponent } from './pages/quiz-selection/quiz-selection.component';

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
        path: 'home',
        component: BaseLayoutComponent,
        children: [
            {
                path: 'quiz-selection',
                component: QuizSelectionComponent,
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