import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroesGetComponent } from './heroes-get/heroes-get.component';
import {NgModule} from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{path: 'heroes', component: HeroesComponent},
{path: 'heroes/:id', component: HeroesGetComponent},
{path: 'dashboard', component: DashboardComponent},
{path: '', redirectTo: 'dashboard', pathMatch: 'full'} //set the default path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
