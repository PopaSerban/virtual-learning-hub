import { Component, Input } from "@angular/core";
import { CardComponent } from "../../../shared/components/card/card.component";
import { ButtonModule } from 'primeng/button';
import { CardInterface } from "../../models/card.interface";

@Component({
    selector: 'lh-card-section',
    templateUrl: './cardSection.component.html',
    standalone: true,
    imports: [CardComponent, ButtonModule]
})
export class CardSectionComponent{
    @Input() cards: CardInterface[] = [];

}