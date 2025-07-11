import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../../services/gifs.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  selector: 'gifs-gif-history',
  imports: [GifListComponent],
  templateUrl: './gif-history.component.html'
})
export default class GifHistoryComponent {
  gifService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query'])
    )
  );
  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}
