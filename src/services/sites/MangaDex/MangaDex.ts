import axios from 'axios';
import { MangaService } from '../../MangaService';

import MangaDexMockData from './MangaDexMockData.json';

const BASE_URL = 'api.mangadex.org';
const BASE_URL_CDN = 'uploads.mangadex.org';
export class MangaDex implements MangaService {
  async getMangaList(query: string) {
    const config = {
      method: 'get',
      url: `${BASE_URL}/manga?title=${query}&includes[]=cover_art&includes[]=chapter`,
    };

    try {
      const response = await axios(config);
      const { data }: typeof MangaDexMockData = response.data;
      return data?.map((curr: any) => ({
        id: curr?.id,
        //TODO: dynamically localize title
        title: curr?.attributes?.title['en'],
        coverURL: `${BASE_URL_CDN}/${curr?.id}/${curr?.relationships?.find(
          (relationship: any) => relationship.type === 'cover_art'
        )}`,
      }));
    } catch (error) {
      console.log(error);
      return [{ id: '', title: '', coverURL: '' }];
    }
  }
}
