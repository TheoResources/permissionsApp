import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthorizationService} from './authorization.service';


@Directive({
  selector: '[appWriteAll]'
})
export class WriteAllRoleDirective implements OnInit {
  constructor(private vcr: ViewContainerRef,
              private tpl: TemplateRef<any>,
              private authorizationService: AuthorizationService) {
  }

  ngOnInit(): void {
    if (this.authorizationService.hasWriteAllRole()) {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.tpl);
    }
  }

}
