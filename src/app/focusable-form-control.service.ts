import { Injectable, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FocusableFormControlService {
  private readonly accessors = new Map<FormControl,ElementRef<AnalyserNode>>();
  posYScreenControls = new Map<FormControl,number>();

  public registerControl(control:FormControl, elementRef:ElementRef): void{
    let h = (elementRef.nativeElement as HTMLElement).getBoundingClientRect().top;
    this.posYScreenControls.set(control,h);
    this.accessors.set(control,elementRef);
  }

  public deRegisterControl(control:FormControl): void{
    this.accessors.delete(control);
    this.posYScreenControls.delete(control);
  }

  public getOrderedControls(controls:FormControl[]):FormControl[]{
    return controls.sort((control1,control2)=>{
      return this.posYScreenControls.get(control1) - this.posYScreenControls.get(control2);
    });
  }

  public focus(control: FormControl){
    const elementRef = this.accessors.get(control);
    if(elementRef && typeof elementRef.nativeElement['focus'] === 'function'){
      (elementRef.nativeElement as any).focus();
    }
  }

  findInvalidInputEls(formGroup:FormGroup|FormArray,invalidEls:FormControl[]){
    Object.keys(formGroup.controls).forEach(key=>{
      let control = formGroup.controls[key];
      if(control instanceof FormGroup || control instanceof FormArray){
        this.findInvalidInputEls(control, invalidEls);
      }
      else if(control.invalid) {
        (control as FormControl).markAsTouched();
        invalidEls.push(control);
        // this.focusableFormControls.focus((control as FormControl));
      }
    });
    return invalidEls;
  }


  public logControls(){
    console.log(this.accessors);
    console.log(this.accessors.values());
  }

}
