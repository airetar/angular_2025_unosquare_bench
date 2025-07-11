import { Component, input } from '@angular/core';
import { GifListItemComponent } from "./gif-list-item/gif-list-item.component";
import { GifItem } from '../../interfaces/gif-item.interface';

@Component({
  selector: 'gif-list',
  imports: [GifListItemComponent],
  templateUrl: './gif-list.component.html'
})
export class GifListComponent {
  gifs = input.required<GifItem[]>();
}
