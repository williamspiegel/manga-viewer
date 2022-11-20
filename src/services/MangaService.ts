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

  // scanlationAuthor (if required by API ToS)
  scanlationAuthor?: string;

  // NOTE: either the title or volume + chapter must be passed in (or both)

  // Title of chapter (please prepend volume and chapter here if available)
  title?: string;

  // Volume chapter belongs to (required if passing in an empty title)
  volume?: number;

  // Chapter number
  chapter?: number;
};

export abstract class MangaService {
  static getMangaList: (query: string) => Promise<MangaEntry[]>;
  static getChapters: (id: string) => Promise<Chapter[]>;
  // get URLs for each page of chapter
  static getPages: (id: string) => Promise<string[]>;
}
