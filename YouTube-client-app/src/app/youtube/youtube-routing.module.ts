import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './pages/card/card.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
import { YoutubeComponent } from './youtube.component';

const routes: Routes = [
  { path: '', component: YoutubeComponent },

  { path: 'youtube/:id', component: SearchItemComponent },

  { path: 'add', component: CardComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule {}
