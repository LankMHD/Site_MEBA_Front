import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { FootersComponent } from "./footers/footers.component";

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FootersComponent],
  template: `
    <div class="min-h-screen flex flex-col">
      <app-header />
      <main class="flex-1">
        <router-outlet />
      </main>
      <app-footers />
    </div>
  `
})
export class PublicLayoutComponent {}
