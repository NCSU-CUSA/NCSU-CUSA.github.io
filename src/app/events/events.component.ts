import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css', '../../global/global.css']
})
export class EventsComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  cusaEvent:string[][] = [];
  eventLength = 0;
  events:any = []

  upcoming:any = {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.databaseService.getEvents().subscribe({
      next: res => {
        const eventArray:string[] = res.split("\n")

        const headers = eventArray.shift()?.replace("\r","").split("\t");

        eventArray.forEach(element => {
          let id = 0;
          const event = element.replace("\r", "");
          const eventInfo:any = {}
          const eventInfoArray = event.split("\t");

          for (let i = 0; i < headers?.length!; i++) {
            if (headers![i] === "Picture") {
              const pictures = eventInfoArray[i].split(";");
              const out:string[] = []

              pictures.forEach(element => {
                let id = element.replace("https://drive.google.com/file/d/", "")
                id = id.replace("/view?usp=sharing", "")
                let imageUrl = "https://drive.google.com/uc?id=" + id;
                out.push(imageUrl)
              });
              eventInfo[headers![i]] = out;
            } else if (headers![i] === "Upcoming") {
              if (eventInfoArray[i] === "TRUE") {
                eventInfo[headers![i]] = true;
              } else {
                eventInfo[headers![i]] = false;
              }
            } else {
              eventInfo[headers![i]] = eventInfoArray[i];
            }
          }

          if (eventInfo['Upcoming']) {
            this.upcoming = eventInfo
          } else {
            this.cusaEvent.push(eventInfo);
          }
          id++;
          this.eventLength = this.cusaEvent.length / 4;
        });

        this.cusaEvent.forEach(element => {
          for (let i = 0; i < this.eventLength; i++) {
            this.events[i] = []
            for (let j = 0; j < 4; j++) {
              if (this.cusaEvent.length != 0) {
                this.events[i].push(this.cusaEvent.shift());
              }
            }
          }
        });

      }, error: res => {

      }
    })
  }

}
