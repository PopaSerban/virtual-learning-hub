import { Component } from "@angular/core";
import { UserCardComponent } from "../../../shared/components/userCard/userCard.component";

@Component({
    selector: 'lh-comment-section',
    templateUrl: './commentSection.component.html',
    styles: `
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    .item{
        flex-grow: 1;
        flex-basis: 200;
        margin: 20px;
    }
    `,
    standalone: true,
    imports: [UserCardComponent]
})
export class CommentSectionComponent{

}