import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footers.component.html',
  styleUrls: ['./footers.component.scss']
})
export class FootersComponent {
  currentYear = new Date().getFullYear();

}
