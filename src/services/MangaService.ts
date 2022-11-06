type MangaEntry = {
  //ID that goes into getMangaCover
  id: string;

  //Title of manga (may vary depending on user's locale)
  title: string;

  //URL that points to cover image of manga (some services hide this in a separate service)
  coverURL: Promise<string>;
};

export interface MangaService {
  getMangaList: (query: string) => Promise<MangaEntry[]>;
}
