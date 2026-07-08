import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-educative',
  imports: [CommonModule],
  templateUrl: './radio-educative.html',
  styleUrl: './radio-educative.scss',
})
export class RadioEducative {
  niveaux(): unknown[] {
    return [];
  }
}
