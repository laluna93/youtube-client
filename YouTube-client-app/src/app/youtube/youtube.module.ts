import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { YoutubeComponent } from './youtube.component';
import { SearchItemComponent } from './pages/search-item/search-item.component';
import { SearchResultsComponent } from './components/search/search-results/search-results.component';
import YoutubeRoutingModule from './youtube-routing.module';
import { FilterPipe } from './pipes/pipes/filter.pipe';
import { FlagSortsService } from '../core/services/flag-sort-service';
import { SortsService } from '../core/services/sorts-services';
import { SearchService } from '../core/services/search-service';
import { StylesDirective } from './directives/style.directive';
import { VideoItemService } from '../core/services/video-item-service';
import { YoutubeInterceptor } from './interceptor/youtube.interceptor';

@NgModule({
  declarations: [
    YoutubeComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterPipe,
    StylesDirective,

  ],
  providers: [SearchService, SortsService, FlagSortsService, VideoItemService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeInterceptor,
      multi: true,
    }],
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    YoutubeRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [YoutubeComponent],

})
export class YoutubeModule { }
