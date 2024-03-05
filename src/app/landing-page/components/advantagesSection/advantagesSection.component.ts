import { Component, Input } from '@angular/core';
import { TabletInterface } from '../../../shared/components/tablet/model/tablet.model';
import { TabletComponent } from '../../../shared/components/tablet/tablet.component';

@Component({
  selector: 'lh-advantages-section',
  templateUrl: './advantagesSection.component.html',
  standalone: true,
  styles: `
  .splash{
    background-image: url('/assets/imgs/blob-2.svg');
    background-repeat: no-repeat;
    background-position: center;
  }
  .advantages{
    width: 100%;
    margin: 3rem 0;
  }
  .advantages-section{
    margin: 4rem 0;
  }
  .right-container{
    width: 50%;
  }
  .left-container{
    width: 50%;
  }
  `,
  imports: [TabletComponent],
})
export class AdvantagesSectionComponent {
  @Input() rightTablets: TabletInterface[] = [];
  @Input() leftTablets: TabletInterface[] = [];
}
