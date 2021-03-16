import { Injectable } from '@angular/core';
import { Article } from './models/article.entity';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>("http://localhost:3000/content");
  }

  public deleteArticle(id: number){
      return this.http.delete("http://localhost:3000/content" + '/' + id);
  }

  public addArticle(newArticle: Article): Observable<any>{
      const headers = {'content-type': 'application/json'};
      const body = JSON.stringify(newArticle);
      return this.http.post("http://localhost:3000/content", body, {'headers': headers});
    }
}
