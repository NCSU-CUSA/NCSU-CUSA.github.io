import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../global/global.css']
})
export class HomeComponent implements OnInit {

  constructor(private databaseService: DatabaseService) {}

  ngOnInit(): void {}

}
