import { GifItem } from "../interfaces/gif-item.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphyItemToGif(item: GiphyItem): GifItem {
        return {
            id: item.id,
            title: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyItemsToGifArray(items: GiphyItem[]): GifItem[] {
        return items.map(this.mapGiphyItemToGif);
    }
}