export type MangaEntry = {
  // ID that goes into getMangaCover
  id: string;

  // Title of manga (may vary depending on user's locale)
  title: string;

  // Author of manga
  author?: string;

  // description of manga entry
  description: string;

  // URL for cover image of manga
  coverURL: string;
};

export type Chapter = {
  // ID of chapter
  id: string;

  // Title of chapter (please prepend volume and chapter here if available)
  title: string;

  // scanlationAuthor (if required by API ToS)
  scanlationAuthor?: string;
};

export abstract class MangaService {
  static getMangaList: (query: string) => Promise<MangaEntry[]>;
  static getChapters: (id: string) => Promise<Chapter[]>;
  // get URLs for each page of chapter
  static getPages: (id: string) => Promise<string[]>;
}
