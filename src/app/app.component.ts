import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-api-project';
  data: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
