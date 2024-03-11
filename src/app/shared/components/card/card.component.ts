import { Component, Input } from "@angular/core";
import { CardModule } from "primeng/card";
@Component({
    selector: 'lh-card',
    templateUrl: './card.component.html',
    imports: [CardModule],
    styles: `
    ::ng-deep .p-card{
        border-radius: 25px;
    }`,
    standalone: true,
})
export class CardComponent {
    @Input() header: string = '';
    @Input() subHeader: string = '';
    @Input() style: Object = {};
    @Input() imgSrc: string = 'https://primefaces.org/cdn/primeng/images/usercard.png';
}