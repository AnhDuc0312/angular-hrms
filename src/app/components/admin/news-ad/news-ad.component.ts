import { Component , OnInit } from '@angular/core';
import { News } from '../../../models/news';
import { NewsService } from '../../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-ad',
  // standalone: true,
  // imports: [],
  templateUrl: './news-ad.component.html',
  styleUrl: './news-ad.component.scss'
})
export class NewsAdComponent implements OnInit{

  newsList: News[] = [];

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    // this.newsList = this.newsService.getAllNews();
  }

  addNews() {
    this.router.navigate(['/admin/news/add']);
  }
  editNews(id: number, updatedNews: News): void {
    const index = this.newsList.findIndex(news => news.id === id);
    if (index !== -1) {
      this.newsList[index] = { ...this.newsList[index], ...updatedNews };
    }
  }

  deleteNews(id: number): void {
    this.newsList = this.newsList.filter(news => news.id !== id);
  }

}
