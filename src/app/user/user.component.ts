import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../app.service';
import { MatTableDataSource } from '@angular/material';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['id', 'username', 'salary', 'age'];
  dataSource = new MatTableDataSource<User>();
  
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      data => {
        this.dataSource.data = data;
      }
    )
  }

}
