import { computed, Directive, effect, EventEmitter, Host, HostBinding, HostListener, input, Input, OnChanges, Output, output, signal, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[gifsColors]',
})
export class ColorsDirective {
  color = input.required<string>();
  changeColor = effect(() => this.setNewColor(this.color()));
  @Output() printNaye = new EventEmitter();
  @HostBinding('style.background-color') background: any;
  

  @HostListener('click') newColor() {
    this.setNewColor('black');
    this.printNaye.emit('Hola Naye');
  }

  setNewColor(color: string) {
    this.background = color;
  }
}
