import type { GifItem } from './../interfaces/gif-item.interface';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { delay, map, tap } from 'rxjs';
import { GifHistoryConstants } from '../helpers/constants/GifHistoryKeys.constants';

function getHIstoryFromStorage() {
  const storageKeys = localStorage.getItem(GifHistoryConstants.localStorageHistoryKey);
  const historyKeys = storageKeys ? JSON.parse(storageKeys) : {};

  return historyKeys;
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private http = inject(HttpClient);
  trendingGifs = signal<GifItem[]>([]);
  gifsLoading = signal(true);

  searchHistory = signal<Record<string, GifItem[]>>(getHIstoryFromStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  saveHistoryToStorage = effect(() => {
    localStorage.setItem(GifHistoryConstants.localStorageHistoryKey, JSON.stringify(this.searchHistory()));
  })

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: 25,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips'
      }
    }).subscribe( (response) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(response.data);
      this.trendingGifs.set(gifs);
      this.gifsLoading.set(false);
    });
  }

  searchGifs(query: string) {
    this.gifsLoading.set(true);
    return this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/search`, {
      params: {
        api_key: environment.apiKeyGiphy,
        limit: 25,
        offset: 0,
        rating: 'g',
        bundle: 'messaging_non_clips',
        q: query
      }
    }).pipe(
      delay(1500),
      map( ( {data} ) => GifMapper.mapGiphyItemsToGifArray(data)),
      /**
       * gif search history
       */
      tap( items => {
        this.searchHistory.update( history => ({
          ...history,
          [query.toLowerCase()]: items
        }))
      })
    );
  }

  getHistoryGifs(query: string): GifItem[] {
    return this.searchHistory()[query] ?? [];
  }
}
