import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: 'simple-form.component.html',
//   template: `
//     <form novalidate #f="ngForm">
    
// <input type="text" name="txtForForm" [(ngModel)]="sampleProp"/>
// <input type='text' name='txt2' [value]="isDisabled"/>
// <button [ngModel]='isDisabled'>TimePass</button>
//     <br/>
//     TextBox Disabled Value: {{isDisabled}}
//     <br/>Class Value: {{sampleProp}}
//     <br/>ngForm Value:
//     {{f.value.txtForForm | json | lowercase }}

    
// </form>
//     <p>

//       <input #iBox type='text'/>    
//     <button (click)='onBtnClick($event, iBox.value)' (mouseover)='changeColor(iBox)'>Click Me!</button>
    
//     {{f.value | json | lowercase }}
//     </p>
//   `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

    sampleProp = "One way Binding";
isDisabled=true;
  constructor() { }

onBtnClick(event, value){
    console.log('The event occurred details: ');
    console.log(event);
    console.log('The #iBox contained: '+value) ;
}
    
changeColor(htmlControl){
    
    htmlControl.style = 'background-color:blue;color:yellow; pointer-events:none';
    console.log('Color changed to blue.');
}
    
  ngOnInit() {
  }

}
