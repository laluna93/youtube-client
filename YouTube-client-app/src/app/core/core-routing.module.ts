import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/pages/login/login.component';
import { CardComponent } from '../youtube/pages/card/card.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  { path: '', component: CoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add', component: CardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class CoreRoutingModule {}
