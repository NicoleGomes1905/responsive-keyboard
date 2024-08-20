import { Component, OnInit } from '@angular/core';
import { KeyboardService } from '../keyboard/keyboard.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  displayText = '';

  constructor(private keyboardService: KeyboardService) {}

  ngOnInit() {
    this.keyboardService.display$.subscribe(text => {
      this.displayText = text;
    });
  }
}