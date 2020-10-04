
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { SearchUserService } from '../search-user.service';
import { SearchRepositoryService } from '../search-repo-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: User;
  userRepository: Repository[];

  constructor(
    public searchUserService: SearchUserService,
    public searchRepositoryService: SearchRepositoryService
  ) {}

  ngOnInit(): void {
    this.getUser('Mulama');
  }

  getUser(term: string) {
    this.searchUserService.fetchUsers(term).then(
      () => {
        this.user = this.searchUserService.usersFound[0];
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUserRepos(endpoint: string) {
    this.searchRepositoryService.getUserRepos(endpoint).then(
      () => {
        this.userRepository = this.searchRepositoryService.userRepos;
        console.log(this.userRepository.length);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
