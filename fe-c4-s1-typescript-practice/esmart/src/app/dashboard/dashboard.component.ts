import { Component } from '@angular/core';
import { MOVIES } from '../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  dashboardText:string="list of movies";
  movies = MOVIES;

  searchText: string = "";
    search() {
      if (this.searchText === '' || !this.searchText)
        this.movies = MOVIES;
      else {
        this.movies = MOVIES;
        this.movies = this.movies.filter(movie => movie.movieTitle?.startsWith(this.searchText.toLowerCase()));
    }
  }
  reset() {
    this.searchText = "";
    this.movies = MOVIES;
}
}
