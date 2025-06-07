import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

const heroDefault = {
    name: 'Ironman',
    age: 45
}

@Component({
    templateUrl: './hero-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [UpperCasePipe]
})
export class HeroPageComponent {
    name = signal(heroDefault.name);
    age = signal(heroDefault.age);
    
    heroDescription = computed(() => {
        const description = `${ this.name() } - ${ this.age() }`;
        return description;
    });

    changeHero() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set(heroDefault.name);
        this.age.set(heroDefault.age);
    }

    changeAge() {
        this.age.set(60);
    }
}