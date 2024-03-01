import { Component, Input } from '@angular/core';
import { MenubarModule} from 'primeng/menubar'
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lh-topbar',
  templateUrl: './topbar.component.html',
  standalone: true,
  imports: [MenubarModule, ButtonModule],

})
export class TopbarComponent {
  @Input()menuItems: MenuItem[] = [];
  @Input()logo: string = 'https://primefaces.org/cdn/primeng/images/primeng.svg';
  login(): void {
    console.log('Login');
  }
}
