import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  public post(){
    return new Observable( observer => {
      setTimeout(() => {
        observer.next();
        observer.complete();
      } , 1000);
    });
  }
}
