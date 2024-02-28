import { Component } from '@angular/core';
import { MenubarModule} from 'primeng/menubar'
import { menuItems } from './models/menu-items.model';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lh-topbar',
  templateUrl: './topbar.component.html',
  standalone: true,
  imports: [MenubarModule, ButtonModule],

})
export class TopbarComponent {
  menuItems: MenuItem[] = menuItems;
  login(): void {
    console.log('Login');
  }
}
