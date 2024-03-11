import { Component, Input } from '@angular/core';
import { MenubarModule} from 'primeng/menubar'
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lh-topbar',
  templateUrl: './topbar.component.html',
  standalone: true,
  styles: `
  ::ng-deep .p-menuitem-text, ::ng-deep .p-menuitem-icon{
    color: white;
  }
  `,
  imports: [MenubarModule, ButtonModule],

})
export class TopbarComponent {
  @Input()menuItems: MenuItem[] = [];
  @Input()logo: string = 'https://primefaces.org/cdn/primeng/images/primeng.svg';
  login(): void {
    console.log('Login');
  }
}
