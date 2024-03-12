import { Component } from '@angular/core';

@Component({
  selector: 'lh-footer',
  templateUrl: './footer.component.html',
  styles: `
    .footer{
        background-color: #8398DF;
        color: white;
        padding: 4% 12%;
        text-align: center;
    }
    .row{
        padding: 0 4%;
    }
    a{
        color: grey;
        outline: none;
        text-decoration: none;
    }
    hr {
    border: none;
    border-top: 1px solid #ccc; 
    margin: 30px 0 0 0;
    }
    `,
  standalone: true,
})
export class FooterComponent {}
