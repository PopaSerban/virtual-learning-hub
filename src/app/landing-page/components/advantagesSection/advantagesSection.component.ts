import { Component, Input } from '@angular/core';
import { TabletInterface } from '../../../shared/components/tablet/model/tablet.model';
import { TabletComponent } from '../../../shared/components/tablet/tablet.component';

@Component({
  selector: 'lh-advantages-section',
  templateUrl: './advantagesSection.component.html',
  standalone: true,
  styles: `
  .advantages{
    width: 100%;
    margin: 3rem 0;
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
