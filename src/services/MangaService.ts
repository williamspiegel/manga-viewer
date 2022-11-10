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

export abstract class MangaService {
  static getMangaList: (query: string) => Promise<MangaEntry[]>;
}
