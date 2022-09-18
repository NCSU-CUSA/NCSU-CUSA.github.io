import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css', '../../global/global.css']
})
export class MerchComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  cusaStore:string[][] = [];
  storeLength = 0;
  store:any = []

  inventory:any = {};
  itemId = 0;
  item:any = {}

  size = "S"
  member = "No"

  ngOnInit(): void {
    this.getMerch();
  }

  getMerch() {
    this.databaseService.getStore().subscribe({
      next: res => {
        const storeArray:string[] = res.split("\n");
        const headers = storeArray.shift()?.replace("\r","").split(",");

        storeArray.forEach(element => {
          let id = 0;
          const merch = element.replace("\r", "");
          const merchInfo:any = {}
          const merchArray = merch.split(",");

          for (let i = 0; i < headers?.length!; i++) {
            if (headers![i] === "Picture") {
              const pictures = merchArray[i].split(";");
              const out:string[] = []

              pictures.forEach(element => {
                let id = element.replace("https://drive.google.com/file/d/", "")
                id = id.replace("/view?usp=sharing", "")
                let imageUrl = "https://drive.google.com/uc?id=" + id;
                out.push(imageUrl)
              });
              merchInfo[headers![i]] = out;
            } else if (headers![i] === "Sizes") {
              if (merchArray[i] === "TRUE") {
                merchInfo[headers![i]] = true;
              } else {
                merchInfo[headers![i]] = false;
              }
            } else {
              merchInfo[headers![i]] = merchArray[i];
            }
          }
          this.cusaStore.push(merchInfo);
          this.inventory[merchArray[0]] = merchInfo
          id++;
          this.storeLength = this.cusaStore.length / 3;
        });

        this.cusaStore.forEach(element => {
          for (let i = 0; i < this.storeLength; i++) {
            this.store[i] = []
            for (let j = 0; j < 3; j++) {
              if (this.cusaStore.length != 0) {
                this.store[i].push(this.cusaStore.shift());
              }
            }
          }
        });

      }, error: res => {

      }
    })
  }

  getItem(itemName:string) {
    this.item = this.inventory[itemName];
  }

  openForm() {
    const itemName = this.item['Item']
    let itemSize = "N/A"
    if (this.item['Sizes']) {
      itemSize = this.size;
    }
    const formLink = "https://docs.google.com/forms/d/e/1FAIpQLSfLYRsH_XQrprRrHPklAO-PQGx_PXiHlESZ3otjqp6xh7JhMw/viewform?usp=pp_url&entry.1864447454=" + itemName + "&entry.132081617=" + this.member + "&entry.2122450645=" + itemSize;
    open(formLink);
  }
}
