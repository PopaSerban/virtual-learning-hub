import { Component } from "@angular/core";
import { TopbarComponent } from "../../shared/components/topbar/topbar.component";
import { menuItems } from "../../shared/components/topbar/models/menu-items.model";
import { MenuItem } from "primeng/api";

@Component({
    selector: 'lh-landing-page',
    templateUrl: './landingPage.component.html',
    standalone: true,
    imports: [TopbarComponent]
})
export class LandingPageComponent {
     menuItems: MenuItem[] = menuItems;

}