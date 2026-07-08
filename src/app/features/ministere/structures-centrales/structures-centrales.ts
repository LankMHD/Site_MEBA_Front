import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-structures-centrales',
  imports: [CommonModule, RouterLink],
  templateUrl: './structures-centrales.html',
  styleUrl: './structures-centrales.scss',
})
export class StructuresCentrales {
  constructor(private route: ActivatedRoute) {}

  niveaux(): unknown[] {
    return [];
  }

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        // petit délai pour laisser le DOM se stabiliser
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      }
    });
  }
}
