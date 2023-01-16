import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from './core/guards/authorization-guard';
import { ErrorComponent } from './core/pages/error/error.component';
import { YoutubeComponent } from './youtube/youtube.component';

// eslint-disable-next-line import/no-cycle
const routes: Routes = [
  { path: '', component: YoutubeComponent, canActivate: [AuthorizationGuard] },
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: 'video', loadChildren: () => import('./youtube/youtube.module').then((m) => m.YoutubeModule), canActivate: [AuthorizationGuard] },
  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
