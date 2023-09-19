import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../global/global.css']
})
export class HomeComponent implements OnInit {

  constructor(private databaseService: DatabaseService) {}

  mission:string = "";
  gold:string[][] = [];
  silver:string[][] = [];
  bronze:string[][] = [];
  ngOnInit(): void {
    this.getBasicInfo();
    this.getSponsors();
  }

  getBasicInfo() {
    this.databaseService.getBasicInfo().subscribe({
      next: res => {
        const info:string[] = res.split("\n");
        this.mission = info[1].split("\t")[1]
        // const headers = boardArray.shift()?.replace("\r","").split(",");
        // console.log(headers)
      },
      error: res => {}
    })
  }

  getSponsors() {
    this.databaseService.getGoldSponsors().subscribe({
      next: res => {
        this.gold = this.getSponsorCards(res)
      },
      error: res => {}
    })

    this.databaseService.getSilverSponsors().subscribe({
      next: res => {
        this.silver = this.getSponsorCards(res)
      },
      error: res => {}
    })

    this.databaseService.getBronzeSponsors().subscribe({
      next: res => {
        this.bronze = this.getSponsorCards(res)
      },
      error: res => {}
    })
  }

  getSponsorCards(sponsorList:string) {
    const sponsorArray:string[] = sponsorList.split("\n");
    sponsorArray.shift()

    let count = 1
    let row:string[] = []
    let output:string[][] = []
    sponsorArray.forEach(element => {
      let id = element.replace("https://drive.google.com/file/d/", "")
      id = id.replace("/view?usp=sharing", "")
      const imageUrl = "https://drive.google.com/uc?id=" + id;
      row.push(imageUrl)
      if (count % 3 == 0) {
        output.push(row)
        row = []
      }
      count++;
    })
    output.push(row)

    return output
  }
}
