import { Component } from '@angular/core';

@Component({
  selector: 'lh-landing-layout',
  standalone: true,
  template: `
    <div class="container">
      <div class="main-layout">
        <nav class="menu-layout">
          <ng-content select="[menu]"></ng-content>
        </nav>
        <div class="body">
          <ng-content select="[body]"></ng-content>
        </div>
        <footer class="footer-layout">
          <ng-content select="[footer]"></ng-content>
        </footer>
      </div>
    </div>
  `,
  styles: `
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .main-layout {
        display: flex;
        flex-direction: column;
        width: 80%;
        height: 100%;
    }
    .menu-layout {
        margin: 0 3rem;
    }
    @media (max-width: 768px) {
        .main-layout{
            width: 95%;
        }
        .menu-layout {
            margin: 0;
        }

    }
    @media (min-width: 769px) and (max-width: 1000px) {
        .menu-layout {
            margin: 0;
        }
    }
    `,
})
export class LandingLayoutComponent {}
