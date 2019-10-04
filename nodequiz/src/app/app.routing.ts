import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './shared';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/guards/auth-guard';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { FourZeroFourComponent } from './pages/four-zero-four/four-zero-four.component';
import { QuizResultsComponent } from './pages/quiz-results/quiz-results.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                component: SigninComponent
            },
            {
                path: '',
                component: HomeComponent
            }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: HomeComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'quiz-results',
                component: QuizResultsComponent,
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
            },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/four-zero-four'
    }
];