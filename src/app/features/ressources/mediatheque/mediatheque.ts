import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mediatheque',
  imports: [CommonModule],
  templateUrl: './mediatheque.html',
  styleUrl: './mediatheque.scss',
})
export class Mediatheque {
  niveaux(): unknown[] {
    return [];
  }
}


