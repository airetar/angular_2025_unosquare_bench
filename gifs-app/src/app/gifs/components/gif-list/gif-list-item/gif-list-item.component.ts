import { Component, input } from '@angular/core';
import { GifItem } from 'src/app/gifs/interfaces/gif-item.interface';

@Component({
  selector: 'gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.component.html'
})
export class GifListItemComponent {
  gif = input.required<GifItem>();
}
