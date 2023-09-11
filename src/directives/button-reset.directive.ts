import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subscription, filter, tap } from 'rxjs';

@Directive({
  selector: '[appButtonReset]',
})
export class ButtonResetDirective implements OnInit, OnDestroy {
  @Input('appButtonReset') resetButton!: EventEmitter<boolean>;
  enabledBtn$!: Subscription;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    this.enabledBtn$ = this.resetButton
      .pipe(
        filter((value) => !!value), // - true 則刪除 btn-loading 屬性
        tap(() =>
          this.renderer.removeClass(this.el.nativeElement, 'btn-loading')
        )
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.enabledBtn$ && this.enabledBtn$.unsubscribe();
  }
}
