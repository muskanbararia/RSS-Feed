import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }
  getJSON(feedUrl: string) {
      const url = 'https://api.rss2json.com/v1/api.json?rss_url=' + feedUrl;
      return this.http.get(url);
    }
}
