import { Directive, Input, ElementRef, OnDestroy } from '@angular/core';
import { FormGroupDirective, FormControl, FormControlDirective } from '@angular/forms';
import { FocusableFormControlService } from './focusable-form-control.service';

@Directive({
  selector: '[formControlName]'
})
export class FocusableFormControlNameDirective implements OnDestroy{
  private control: any;
  
  @Input('formControl')
  public set formControl(control){
     console.log("control", control);
  }

  @Input()
  public set formControlName(name: string){
    console.log(this.formGroupDirective);
    let index = this.formGroupDirective.directives.length-1;
    this.focusableControls.registerControl(this.formGroupDirective.directives[index].control,this.elementRef);
  }
  constructor(private readonly formGroupDirective:FormGroupDirective, private focusableControls:FocusableFormControlService,
    private readonly elementRef:ElementRef<any>) {
    
     }
  
    ngOnDestroy(): void {
      this.focusableControls.deRegisterControl(this.control);
    }
}
