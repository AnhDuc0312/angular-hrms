import { Component , OnInit ,Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsService } from '../../../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-news',
  // standalone: true,
  // imports: [],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.scss'
})
export class AddNewsComponent implements OnInit{
  @Output() newsAdded = new EventEmitter<any>();
  newsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private newsService: NewsService, private router: Router) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.newsForm.invalid) {
      return;
    }
    
    // this.newsService.addNews(this.newsForm.value);
    this.router.navigate(['/news']);
  }

}
