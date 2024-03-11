import { Component, Input } from "@angular/core";

@Component({
    selector: 'lh-tablet',
    templateUrl: './tablet.component.html',
    standalone: true,
    styles: `
    .tablet-outer{
        border: 1px solid #e5e5e5;
        background-color: white;
        border-radius: 15px;
        padding: 0.5rem;
        min-height: 100px;
        margin: 1rem 1.5rem;
    }
    .tablet-inner{
        border-radius: 15px;
        background-color: #f5f5f5;
    }
    .content{
        padding: 2rem 0;
    }
    .fill-space{
        width: 100%;
        height: 100%;
    }
    .icon-holder{
        width: 60px;
        height: 60px;
        padding: 0.9rem;
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