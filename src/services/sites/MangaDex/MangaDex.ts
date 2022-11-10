import axios, { AxiosRequestConfig } from 'axios';
import { MangaService } from '../../MangaService';

import MangaDexMockData from './MangaDexMockData.json';

const BASE_URL = 'https://api.mangadex.org';
const BASE_URL_CDN = 'https://uploads.mangadex.org';
export class MangaDex implements MangaService {
  static async getMangaList(query: string) {
    const config: AxiosRequestConfig = {
      method: 'get',
      baseURL: BASE_URL,
      url: `/manga?title=${query}&includes[]=cover_art&includes[]=chapter`,
    };

    try {
      const response = await axios(config);
      const { data }: typeof MangaDexMockData = response.data;
      return data?.map((curr: any) => {
        const fileName = curr?.relationships?.find(
          (relationship: any) => relationship.type === 'cover_art'
        )?.attributes?.fileName;
        return {
          id: curr?.id,
          //TODO: dynamically localize title + fallback to en
          title: curr?.attributes?.title['en'],
          coverURL: `${BASE_URL_CDN}/covers/${curr?.id}/${fileName}.256.jpg`,
        };
      });
    } catch (error) {
      console.error('MangaDex::getMangaList error:  ', error);
      return [{ id: '', title: '', coverURL: '' }];
    }
  }
}
