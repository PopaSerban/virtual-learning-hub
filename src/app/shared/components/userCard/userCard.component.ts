import { Component, Input } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'lh-user-card',
  templateUrl: './userCard.component.html',
  imports: [FieldsetModule, AvatarModule],
  styles: `
    ::ng-deep .p-fieldset{
        background: linear-gradient(45deg, #8398DF, #D3A4EF);
        margin: 0 1rem;
        color: white;
    }
    ::ng-deep .p-fieldset-legend, ::ng-deep .p-fieldset{
        border-radius: 25px;
    }
    `,
  standalone: true,
})
export class UserCardComponent {
  @Input() content: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  @Input() userName: string = 'John Doe';
}
