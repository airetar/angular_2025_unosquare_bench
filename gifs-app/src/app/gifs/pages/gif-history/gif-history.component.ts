import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from '../../services/gifs.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifListComponent } from "../../components/gif-list/gif-list.component";
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorsDirective } from './colors.directive';

@Component({
  selector: 'gifs-gif-history',
  imports: [GifListComponent, FormsModule, ReactiveFormsModule, ColorsDirective],
  templateUrl: './gif-history.component.html'
})
export default class GifHistoryComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: ['', Validators.required]
  })

  /* route = inject(ActivatedRoute)
  constructor() {
    this.route.params.subscribe(
    )
  } */
  gifService = inject(GifsService);
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query'])
    )
  );

  querycomputed = computed( () => this.query() + 'prueba');

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });

  print() {
    console.log(this.form.getRawValue());
  }

  hiNaye(event: string) {
    console.log(event);
  }
}
