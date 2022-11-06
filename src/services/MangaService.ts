export type MangaEntry = {
  // ID that goes into getMangaCover
  id: string;

  // Title of manga (may vary depending on user's locale)
  title: string;

  // URL for cover image of manga
  coverURL: string;
};

export interface MangaService {
  getMangaList: (query: string) => Promise<MangaEntry[]>;
}
