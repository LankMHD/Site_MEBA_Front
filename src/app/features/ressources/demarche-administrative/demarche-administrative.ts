import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-demarche-administrative',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './demarche-administrative.html',
  styleUrl: './demarche-administrative.scss',
})
export class DemarcheAdministrative {
  openedIndex: number | null = null;

  toggle(index: number): void {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
}
