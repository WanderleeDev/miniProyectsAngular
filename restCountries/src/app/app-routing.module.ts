import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { FlagSectionComponent } from './views/flag-section/flag-section.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Countries'
  },
  {
    path: 'flag/:id',
    component: FlagSectionComponent,
    title: 'Flag'
  },
  {
    path: 'aplha/:id',
    component: FlagSectionComponent,
    title: 'Flag'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
