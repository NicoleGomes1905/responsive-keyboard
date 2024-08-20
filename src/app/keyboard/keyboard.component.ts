import { Component } from '@angular/core';
import { KeyboardService } from './keyboard.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent {
  row1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  row2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  row3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  constructor(private keyboardService: KeyboardService) {}

  handleKeyPress(key: string) {
    this.keyboardService.appendToDisplay(key);
  }

  handleBackspace() {
    this.keyboardService.removeLastCharacter();
  }

  handleEnter() {
    this.keyboardService.appendToDisplay('\n');
  }

  handleSpace() {
    this.keyboardService.appendToDisplay(' ');
  }
}