import { Component } from '@angular/core';
import { InputComponent } from '../UI/input/input.component';
import { GithubService } from '../../services/github.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [InputComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {
  users: any[] = [];
  isLoading = false;
  beforeLoading = false;

  constructor(private githubService: GithubService) {}

  search(query: string): void {
    this.isLoading = true;
    this.githubService.searchUsers(query).subscribe(
      (response: any) => {
        this.users = response.items.slice(0, 20);
        this.isLoading = false;
        this.beforeLoading = true;
      },
      (error) => {
        this.isLoading = false;
        this.beforeLoading = true;
        console.error(error);
      }
    );
  }
}
