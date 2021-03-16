import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../article.service';
import {Article} from '../models/article.entity';
import {Observable, of, Subscription} from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  articles?: Article[];
  private _articleSub?: Subscription;

  constructor(private articleService: ArticleService) {
  }


  ngOnInit(): void {
    this._articleSub = this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

  public refresh(): void{
      this._articleSub = this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }

  delete(article: Article) {
      if (confirm('supprimer ?')){
        this.articleService.deleteArticle(article.id!).subscribe( res =>
        {this.refresh(); });
      }
    }
}

