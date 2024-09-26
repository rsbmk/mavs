export type ResponseCharacter = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

type Data = {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
  resourceURI: string;
  comics: Comics;
  series: Comics;
  stories: Stories;
  events: Comics;
  urls: URL[];
}

type Comics = {
  available: number;
  collectionURI: string;
  items: ComicsItem[];
  returned: number;
}

type ComicsItem = {
  resourceURI: string;
  name: string;
}

type Stories = {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
}

type StoriesItem = {
  resourceURI: string;
  name: string;
  type: ItemType;
}

enum ItemType {
  Cover = "cover",
  Empty = "",
  InteriorStory = "interiorStory",
}

type Thumbnail = {
  path: string;
  extension: Extension;
}

enum Extension {
  GIF = "gif",
  Jpg = "jpg",
}

type URL = {
  type: URLType;
  url: string;
}

enum URLType {
  Comiclink = "comiclink",
  Detail = "detail",
  Wiki = "wiki",
}