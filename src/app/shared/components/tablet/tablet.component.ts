import { Component, Input } from "@angular/core";

@Component({
    selector: 'lh-tablet',
    templateUrl: './tablet.component.html',
    standalone: true,
    styles: `
    .tablet-outer{
        border: 1px solid #e5e5e5;
        border-radius: 15px;
        padding: 0.5rem;
        min-height: 150px;
        margin: 1rem 5rem;
    }
    .tablet-inner{
        border-radius: 15px;
        background-color: #f5f5f5;
    }
    .content{
        padding: 1rem 0;
    }
    .fill-space{
        width: -webkit-fill-available;
        height: -webkit-fill-available;
    }
    .icon-holder{
        width: 100px;
        height: 100px;
        padding: 0.5rem;
        background-color: white;
        border-radius: 10px;
    }
    .text{
        font-size: 1.5rem;
        font-weight: 500;
    }
    `
})
export class TabletComponent{
    @Input() icon: string= '';
    @Input() text: string= '';
}