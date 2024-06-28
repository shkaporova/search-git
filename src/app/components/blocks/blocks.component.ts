import { Component } from '@angular/core';
import { BlockComponent } from '../block/block.component';
import { GithubService } from '../../services/github.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../UI/input/input.component';

@Component({
  selector: 'app-blocks',
  standalone: true,
  imports: [BlockComponent, FormsModule, CommonModule, InputComponent],
  templateUrl: './blocks.component.html',
  styleUrl: './blocks.component.scss',
})
export class BlocksComponent {
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
