import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Fyle Internship Challenge';
  username: string = '';
  repositories: any[] = [];
  loading: boolean = false;
  error: string = '';
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;
  repositoriesToShow: any[] = []; 
  userProfile : any;

  constructor(private apiService: ApiService) {}

  searchRepositories() {
    if (this.username.trim() !== '') {
      this.currentPage = 1;
      this.fetchUserProfile();
      this.fetchRepositories();
    } 
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedRepos();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedRepos();
    }
  }
  fetchUserProfile() {
    this.apiService.getUserProfile(this.username).subscribe(
      (response: any) => {
        this.userProfile = response;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

  fetchRepositories() {
    this.loading = true;
    this.error = '';

    this.apiService.getRepos(this.username).subscribe(
      (response: any[]) => {
        this.repositories = response;
        this.totalPages = Math.ceil(this.repositories.length / this.pageSize);
        this.updateDisplayedRepos();
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching repositories:', error);
        this.repositories = [];
        this.loading = false;
        this.error = 'Failed to fetch repositories. Please try again.';
      }
    );
  }

  updateDisplayedRepos() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.repositories.length);
    this.repositoriesToShow = this.repositories.slice(startIndex, endIndex);
  }
}