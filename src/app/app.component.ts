import { BackendService } from './backend.service';
import { ShowService } from './show-box/show.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test-demo';

  constructor(private showService: ShowService,
              private backendService: BackendService){}

  public clean(){
    this.showService.clean();
  }

  public test1(){
    this.showService.log('開始');
    this.backendService.post().subscribe(() => {
      this.showService.log('結束');
    });
  }

  public test2(){
    this.backendService.post().subscribe(() => {
      this.showService.log('結束');
    });
    this.showService.log('開始');
  }

  public test3(){
    this.showService.log('開始');
    this.getData();
    this.showService.log('結束');
  }

  private getData(){
    this.backendService.post().subscribe(() => {
      this.showService.log('拿到了');
    });
  }

  public test4(){
    this.showService.log('開始');
    this.getData2();
  }

  private getData2(){
    this.backendService.post().subscribe(() => {
      this.showService.log('拿到了');
    });
    this.showService.log('結束');
  }

  public solution1(){
    this.showService.log('開始');
    this.getData3().subscribe(() => {
      this.showService.log('結束');
    });
  }

  private getData3(){
    const obser = this.backendService.post();
    obser.subscribe(() => {
      this.showService.log('拿到了');
    });

    return obser;
  }

  public solution2(){
    this.showService.log('開始');
    this.getData4().subscribe(() => {
      this.showService.log('結束');
    });
  }

  private getData4(){
    return new Observable( observer => {
      this.backendService.post().subscribe(() => {
        this.showService.log('拿到了');
        observer.next();
        observer.complete();
      });
    });
  }

  public solution3(){
    this.showService.log('開始');
    this.getData5().then(() => {
      this.showService.log('結束');
    });
  }

  private async getData5(){
    await this.backendService.post().toPromise();
    this.showService.log('拿到了');
  }

}
