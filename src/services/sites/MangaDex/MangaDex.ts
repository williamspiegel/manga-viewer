import axios, { AxiosRequestConfig } from 'axios';
import { MangaService } from '../../MangaService';

import MangaDexMockData from './MangaDexMockData.json';
import MangaDexMockGetChapters from './MangaDexMockGetChapters.json';

const BASE_URL = 'https://api.mangadex.org';
const BASE_URL_CDN = 'https://uploads.mangadex.org';
export class MangaDex extends MangaService {
  static async getMangaList(query: string) {
    const config: AxiosRequestConfig = {
      method: 'get',
      baseURL: BASE_URL,
      url: `/manga?title=${query}&limit=100&includes[]=cover_art&includes[]=chapter&includes[]=author`,
    };

    try {
      const response = await axios(config);
      const { data }: typeof MangaDexMockData = response.data;
      return data?.map((curr: any) => {
        const fileName = curr?.relationships?.find(
          (relationship: any) => relationship.type === 'cover_art'
        )?.attributes?.fileName;
        const author = curr?.relationships?.find(
          (relationship: any) => relationship.type === 'author'
        )?.attributes?.name;
        return {
          id: curr?.id,
          //TODO: dynamically localize title + fallback to en
          title: curr?.attributes?.title['en'],
          coverURL: `${BASE_URL_CDN}/covers/${curr?.id}/${fileName}.512.jpg`,
          author,
          description: curr?.attributes?.description['en'],
        };
      });
    } catch (error) {
      console.error('MangaDex::getMangaList error:  ', error);
      return [{ id: '', title: '', coverURL: '', author: '', description: '' }];
    }
  }
  static async getChapters(id: string) {
    const config: AxiosRequestConfig = {
      method: 'get',
      baseURL: BASE_URL,
      url: `/manga/${id}/feed?includes[]=scanlation_group&includes[]=externalUrl`,
    };
    try {
      const response = await axios(config);
      const { data }: typeof MangaDexMockGetChapters = response.data;
      return data.map((curr: any) => ({
        id: curr.id,
        title: curr.attributes.title,
        scanlationAuthor: curr.relationships.find(
          (relationship: any) => relationship.type === 'scanlation_group'
        ).attributes.name,
      }));
    } catch (error) {
      console.error('MangaDex::getChapters error:  ', error);
      return [];
    }
  }
  static async getPages(id: string) {}
}
