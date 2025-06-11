import { Component, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  templateUrl: './dragonball-super-page.component.html'
})

export class DragonballSuperPageComponent {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]);

  addCharacter(newCharacter: Character): void {
    this.characters.update(
      (list) => [...list, newCharacter]
    );
  }
}
