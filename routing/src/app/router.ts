import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

import {RouteGuardService} from './route-guard.service';

export const router: Routes = [
    { path: '', redirectTo: 'services', pathMatch: 'full' },
    { path: 'about/:id', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'about/guarded/route', component: AboutComponent, canActivate: [RouteGuardService]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

