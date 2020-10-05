
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { SearchUserService } from '../search-user.service';
import { SearchRepositoryService } from '../search-repo-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
})
export class GithubComponent implements OnInit {
  users: User[];
  repository: Repository[];
  usersLength: number;
  reposLength: number;

  constructor(
    private searchUserService: SearchUserService,
    private searchRepoService: SearchRepositoryService,
    private router: Router
  ) {}

  goToUrl(id) {
    this.router.navigate(['/users', id]);
  }

  search(term: string) {
    this.searchUserService.fetchUsers(term).then(
      () => {
        this.users = this.searchUserService.usersFound;
        this.usersLength = this.searchUserService.usersFound.length;
      },
      (error) => {
        console.log(error);
      }
    );
    this.searchRepoService.fetchRepos(term).then(
      () => {
        this.repository = this.searchRepoService.foundRepos;
        this.reposLength = this.searchRepoService.foundRepos.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.search('JOSEPH');
  }
}
