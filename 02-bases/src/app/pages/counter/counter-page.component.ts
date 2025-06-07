import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

const initvalue = 0;

@Component({
    templateUrl: './counter-page.component.html',
    styleUrl: './counter-page.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
    counter = initvalue;
    counterSignal = signal(initvalue);
    
    

    increaseBy(value: number) {
        this.counter += value;
        this.counterSignal.update(current => current + value);
    }

    descreaceBy(value: number) {
        this.counter -= value;
        this.counterSignal.update(current => current - value);
    }

    resetCounter() {
        this.counter = initvalue;
        this.counterSignal.set(initvalue);
    }
}