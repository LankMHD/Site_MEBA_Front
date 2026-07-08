import { Component, AfterViewInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-secretariat-gl',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './secretariat-gl.html',
  styleUrl: './secretariat-gl.scss',
})
export class SecretariatGl implements AfterViewInit {
  constructor(private route: ActivatedRoute) {}

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
