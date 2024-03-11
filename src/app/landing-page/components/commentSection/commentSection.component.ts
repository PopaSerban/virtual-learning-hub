import { Component } from "@angular/core";
import { UserCardComponent } from "../../../shared/components/userCard/userCard.component";
import { RatingModule } from "primeng/rating";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'lh-comment-section',
    templateUrl: './commentSection.component.html',
    styles: `
    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .item{
        flex-grow: 1;
        flex-basis: 200;
        margin: 10px;
    }
    .column{
        flex-direction: column;
    }
    .rated{
        margin-top: 20px
    }
    `,
    standalone: true,
    imports: [UserCardComponent, RatingModule, FormsModule]
})
export class CommentSectionComponent{
    rating: number = 5;
}