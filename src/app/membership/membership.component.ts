import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css', '../../global/global.css']
})
export class MembershipComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  membership:string = "";
  benefits:string = "";
  semester:string = "";
  year:string = "";

  ngOnInit(): void {
    this.getBasicInfo();
  }

  getBasicInfo() {
    this.databaseService.getBasicInfo().subscribe({
      next: res => {
        const info:string[] = res.split("\n");
        this.membership = info[3].split("\t")[1]
        this.benefits = info[4].split("\t")[1]
        this.semester = info[5].split("\t")[1]
        this.year = info[6].split("\t")[1]
      },
      error: res => {}
    })
  }


}
