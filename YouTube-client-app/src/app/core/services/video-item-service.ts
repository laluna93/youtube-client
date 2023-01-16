import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, ObjectVideo } from 'src/app/youtube/components/search/search-item.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()

export class VideoItemService {
  constructor(private http: HttpClient) {}

  getVideoYoutube(textSearch:string): Observable<ObjectVideo> {
    const urlSearch = `search?key=&type=video&maxResults=10&q=${textSearch}`;
    return this.http.get<ObjectVideo>(urlSearch)
      .pipe(
        switchMap((p:ObjectVideo) => {
          const id = p.items.map((e:Item) => e.id.videoId).join(',');
          return this.getInfoVideo(id);
        }),
      );
  }

  getInfoVideo(id:string) {
    return this.http.get<ObjectVideo>(`videos?key=&id=${id}&part=snippet,statistics`);
  }
}
