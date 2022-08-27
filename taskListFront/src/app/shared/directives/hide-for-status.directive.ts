import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Status} from "../task";

@Directive({
  selector: '[hideForStatus]'
})
export class HideForStatusDirective implements OnInit {

  //if the input has the same name as the directive, no need to define any different name when passing the value.
  @Input()
  hideForStatus = "";

  @Input('hideForStatusRemove')
  statusToRemove : String | null = null

  constructor(
    //these two are used to manipulate the DOM and be able to really change the item it was applied to
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>,
  ) {
  }

  ngOnInit(): void {
    var status = this.statusToRemove ? this.statusToRemove : Status.FINISHED

    if (this.hideForStatus == status) {
      this.viewContainerRef.clear()
    } else {
      // adding the component to the view by default. without it, the component is hide
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    }
  }
}
