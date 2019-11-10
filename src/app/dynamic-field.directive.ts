import { Directive, OnDestroy, OnInit, ComponentFactoryResolver, Injector, ComponentRef, ViewContainerRef, Input } from '@angular/core';
import { InputComponent } from './form-fields/input/input.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnDestroy {
  formControl:FormControl;
  name='';
  _field;
  @Input('formGroupInst') formGroupInst:FormGroup;

  @Input()
  set field(field:any){
    this._field = field;
    if(field.type == "input"){
      this.viewContainerRef.clear();
      let componentFactory = this.compFactResolver.resolveComponentFactory(InputComponent);
      let componentRef:ComponentRef<InputComponent> = this.viewContainerRef.createComponent(componentFactory);
      if(this.formControl){
        this.formGroupInst.removeControl(field.name);
      }
      this.formControl = new FormControl("",[Validators.required]);
      this.formGroupInst.addControl(field.name,this.formControl);
      componentRef.instance.formGroup = this.formGroupInst;
      componentRef.instance.formControlName = field.name;
    }
  }

  get field(){
    return this._field;
  }
  
  constructor(private compFactResolver:ComponentFactoryResolver, private injector:Injector, private viewContainerRef:ViewContainerRef) {
  }

  ngOnDestroy(): void {
    this.formGroupInst.removeControl(this._field.name);
    this.viewContainerRef.remove(0);
  }

}
