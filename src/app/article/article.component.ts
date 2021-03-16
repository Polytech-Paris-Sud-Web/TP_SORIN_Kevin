import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import {Article} from '../models/article.entity';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

@Input()
article? : Article;

@Output()
deletedArticle : EventEmitter<Article> = new EventEmitter();

  constructor(){

  }

  ngOnInit(): void {
  }

  delete(): void{
    this.deletedArticle.emit(this.article);
  }
}

