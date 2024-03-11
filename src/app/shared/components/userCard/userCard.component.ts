import { Component, Input } from "@angular/core";
import { FieldsetModule } from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar';

@Component({
    selector: 'lh-user-card',
    templateUrl: './userCard.component.html',
    imports: [FieldsetModule, AvatarModule],
    standalone: true,
})
export class UserCardComponent{ 
    @Input() content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
    @Input() userName: string = 'John Doe';
}