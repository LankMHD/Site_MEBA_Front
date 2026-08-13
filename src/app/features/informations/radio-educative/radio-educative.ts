import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-educative',
  imports: [CommonModule],
  templateUrl: './radio-educative.html',
  styleUrl: './radio-educative.scss',
})
// export class RadioEducative implements OnInit {
//   radioStreamUrl = 'https://radio.education-bf.com/stream';
//   audio = this.radioStreamUrl;
//   loading = false;

//   constructor() {}

//   ngOnInit(): void {
//     this.loadAudio();
//   }

//   loadAudio(): void {
//     this.loading = true;
//     this.audio = this.radioStreamUrl;
//     this.loading = false;
//   }

//   niveaux(): unknown[] {
//     return [];
//   }
// }
export class RadioEducative implements OnInit {

  radioStreamUrl = 'https://radio.education-bf.com/stream';

  audio = this.radioStreamUrl;

  loading = false;

  constructor() {}

  ngOnInit(): void {
    this.loadAudio();
  }

  loadAudio(): void {
    this.loading = true;

    this.audio = this.radioStreamUrl;

    this.loading = false;
  }

  niveaux(): unknown[] {
    return [];
  }
}
