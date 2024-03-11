import { Component } from '@angular/core';
import { TopbarComponent } from '../../shared/components/topbar/topbar.component';
import { menuItems } from '../../shared/components/topbar/models/menu-items.model';
import { MenuItem } from 'primeng/api';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { LandingLayoutComponent } from '../../shared/components/landingLayout/landingLayout.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { CardSectionComponent } from './cardSection/cardSection.component';
import { CardInterface } from '../models/card.interface';
import { environment } from '../../../environments/environment.development';
import { AdvantagesSectionComponent } from './advantagesSection/advantagesSection.component';
import { CommentSectionComponent } from "./commentSection/commentSection.component";

@Component({
    selector: 'lh-landing-page',
    templateUrl: './landingPage.component.html',
    standalone: true,
    styles: `
    .section-1{
        margin-top: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title{
        color: white;
        font-size: 5.5rem;
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
        font-size: 1.5rem;
        color: black;
    }
    p.lead{
        color: white;
        font-size: 1.5rem;
    }
    .img-fluid{
        flex-shrink: 1;
    }
    .welcome-image{
      width: 60%;
    }
    `,
    imports: [
        TopbarComponent,
        PanelModule,
        LandingLayoutComponent,
        ButtonModule,
        CardComponent,
        CardSectionComponent,
        AdvantagesSectionComponent,
        CommentSectionComponent
    ]
})
export class LandingPageComponent {
  menuItems: MenuItem[] = menuItems;
  welcomeSection = environment.landingPage.welcomeSection;
  section2 = environment.landingPage.section2;
  cards: CardInterface[] = environment.landingPage.cardSections;
  rightTablets = environment.landingPage.rightTablets;
  leftTablets = environment.landingPage.leftTablets;
}
