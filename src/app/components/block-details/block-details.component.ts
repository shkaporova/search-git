import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-block-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './block-details.component.html',
  styleUrl: './block-details.component.scss',
})
export class BlockDetailsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private githubService: GithubService
  ) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username')!;
    this.githubService.getUserDetails(username).subscribe((response: any) => {
      this.user = response;
    });
  }
}
