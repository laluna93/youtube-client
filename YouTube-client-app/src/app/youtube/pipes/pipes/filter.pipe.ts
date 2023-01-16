import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../../components/search/search-item.model';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform([...video]: Item[], inputSeacrh: string, sort: string, flag?: boolean | null): Item[] {
    console.log(flag, sort, inputSeacrh, video, 'flag');

    const arr: Item[] = [];
    const newArrVideo: Item[] = [];
    if (!inputSeacrh && !sort) return [];

    if (!inputSeacrh && sort === 'date') return [];

    if (!inputSeacrh && sort === 'count') return [];

    video.forEach((e) => {
      const res = e.snippet.title
        .split(' ')
        .join('')
        .toLocaleLowerCase();
      const res2 = inputSeacrh.split(' ').join('').toLocaleLowerCase();
      if (res.includes(res2)) {
        arr.push(e);
      }

      if ((inputSeacrh || sort) && sort === 'date') {
        if (flag) {
          return arr.sort((a, b) => Date.parse(a.snippet.publishedAt)
           - Date.parse(b.snippet.publishedAt));
        }
        return arr.sort((a, b) => Date.parse(b.snippet.publishedAt)
          - Date.parse(a.snippet.publishedAt));
      }

      if ((inputSeacrh || sort) && sort === 'count') {
        if (flag) {
          return arr.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
        }
        return arr.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
      }

      if (sort && sort !== 'count' && sort !== 'date') {
        if (arr.length === 0) {
          return [];
        }
        arr.forEach((el) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !el.snippet.tags
            ? []
            : el.snippet.tags.filter((item) => {
              if (item.includes(sort)) {
                newArrVideo.push(el);
              }
              return [];
            });
        });
      }
      return arr;
    });
    if (arr.length === 0) {
      return [];
    }
    if (newArrVideo.length !== 0) {
      const setArr = [...new Set(newArrVideo)];
      return setArr;
    }
    return arr;
  }
}
