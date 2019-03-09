import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FruitComponent } from './fruit/fruit.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'fruit', component: FruitComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
