import { effect, Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonBallService {
    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });
    
    addCharacter(newCharacter: Character): void {
        this.characters.update(
            (list) => [...list, newCharacter]
        );
    }
}