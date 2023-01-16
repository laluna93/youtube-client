import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class YoutubeInterceptor implements HttpInterceptor {
  // eslint-disable-next-line class-methods-use-this
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const KEY_API = 'AIzaSyD_vRqUd74JWOmaT5gt0cbRZo3RWpYrFtM';
    const URL = 'https://www.googleapis.com/youtube/v3/';
    const urlRequ = req.url.replace('key=', `key=${KEY_API}`);
    const reqCLone = req.clone({
      url: `${URL}${urlRequ}`,
    });
    return next.handle(reqCLone);
  }
}
