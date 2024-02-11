import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  IsVisible$ = new BehaviorSubject<boolean>(false)

  constructor() { }

  open() {
    this.IsVisible$.next(true)
  }

  close() {
    this.IsVisible$.next(false)
  }

}
