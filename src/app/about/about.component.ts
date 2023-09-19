import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../../global/global.css']
})
export class AboutComponent implements OnInit {

  cusaBoard:string[][] = [];
  boardLength = 0;
  board:any = [];

  constructor(private databaseService: DatabaseService) { }

  about:string = "";
  year:string = ""

  ngOnInit(): void {
    this.getBoard();
    this.getBasicInfo();
  }

  getBasicInfo() {
    this.databaseService.getBasicInfo().subscribe({
      next: res => {
        const info:string[] = res.split("\n");
        this.year = info[0].split("\t")[1]
        this.about = info[1].split("\t")[1]
      },
      error: res => {}
    })
  }

  getBoard() {
    this.databaseService.getBoard().subscribe({
      next: res => {
        const boardArray:string[] = res.split("\n");
        const headers = boardArray.shift()?.replace("\r","").split("\t");
        boardArray.forEach(element => {
          const boardMember = element.replace("\r", "");
          const member:any = {}
          const memberArray = boardMember.split("\t");

          for (let i = 0; i < headers?.length!; i++) {
            if (headers![i] === "Picture") {
              let id = memberArray[i].replace("https://drive.google.com/file/d/", "")
              id = id.replace("/view?usp=sharing", "")
              const imageUrl = "https://drive.google.com/uc?id=" + id;
              member[headers![i]] = imageUrl
            } else {
              member[headers![i]] = memberArray[i];
            }
          }
          this.cusaBoard.push(member);

          this.boardLength = this.cusaBoard.length / 3;
        });
        
        this.cusaBoard.forEach(element => {
          for (let i = 0; i < this.boardLength; i++) {
            this.board[i] = []
            for (let j = 0; j < 3; j++) {
              if (this.cusaBoard.length != 0) {
                this.board[i].push(this.cusaBoard.shift());
              }
            }
          }

        });
      },
      error: res => {

      }
    })
  }
}
