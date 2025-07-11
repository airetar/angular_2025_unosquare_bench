import { GifItem } from './../../interfaces/gif-item.interface';
import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { GifsService } from '../../services/gifs.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [GifListComponent],
  templateUrl: './search.component.html'
})
export default class SearchComponent {
  gifsService = inject(GifsService);
  gifs = signal<GifItem[]>([]);
  observer: Observer<GifItem[]> = {
    next: items => {
      this.gifs.set(items);
    },
    error: (err) => { return },
    complete: () => {
      this.gifsService.gifsLoading.set(false);
    }
  }
  onSearch(search: string) {
    this.gifsService.searchGifs(search).subscribe(this.observer);
  }
}
