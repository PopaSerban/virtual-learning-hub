import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/components/topbar/topbar.component';
import { menuItems } from '../../shared/components/topbar/models/menu-items.model';
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { LandingLayoutComponent } from '../../shared/components/landingLayout/landingLayout.component';

@Component({
  selector: 'lh-landing-page',
  templateUrl: './landingPage.component.html',
  standalone: true,
  imports: [TopbarComponent, PanelModule, LandingLayoutComponent, ButtonModule],
  styles: `
    .section-1{
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        color: white;
        font-size: 7.5rem;
        margin-bottom: 2rem;
    }
    .presentation {
        margin-top: 6rem;
        width: 65%;
    }
    .register{
        width: 100%;
        margin-top: 11rem;
    }
    .lead{
        margin-bottom: 2rem;
        font-size: 1.6rem;
        color: black;
    }
    p.lead{
        color: white;
        font-size: 1.5rem;
    }
    .img-fluid{
        flex-shrink: 1;
    }
    `,
})
export class LandingPageComponent {
  menuItems: MenuItem[] = menuItems;
}
