import { ShowService } from './show.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-box',
  templateUrl: './show-box.component.html',
  styleUrls: ['./show-box.component.css']
})
export class ShowBoxComponent implements OnInit {

  constructor(public showService: ShowService) { }
  public logList = [] as string[];
  ngOnInit(): void {
    this.showService.getLogList().subscribe( list => {
      this.logList = list;
    });
  }

}
