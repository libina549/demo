import { element } from 'protractor';
import { Directive ,ElementRef } from '@angular/core';

@Directive({
  selector: '[appModify]'
})
export class ModifyDirective {

  constructor(element: ElementRef) {
    console.log(element)
    // element.nativeElement.outerText="modified"
    element.nativeElement.style.backgroundColor="red"
   }

}
