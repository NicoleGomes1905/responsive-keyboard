import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeyboardService {
  private displaySubject = new BehaviorSubject<string>('');
  display$ = this.displaySubject.asObservable();

  appendToDisplay(value: string) {
    const current = this.displaySubject.value;
    this.displaySubject.next(current + value);
  }

  removeLastCharacter() {
    const current = this.displaySubject.value;
    this.displaySubject.next(current.slice(0, -1));
  }
}