import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
  ],
  templateUrl: './dragonball-super-page.component.html'
})

export class DragonballSuperPageComponent {

  public dragonBallService = inject(DragonBallService);

}
