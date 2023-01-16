const cardKey = 'cardKey';
export const searchKey = 'searchKey';
interface CardInfo {
  title:string,
  description: string;
  imgUrl:string,
  videoUrl:string,
  date: string
}

interface Default {
  url: string;
  width: number;
  height: number;
}
interface Localized {
  title: string;
  description: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount?: string;
  favoriteCount: string;
  commentCount: string;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Default;
    medium: Default;
    high: Default;
    standard: Default;
    maxres: Default;
  };
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Id {
  kind: string;
  videoId:string
}
export interface Item {
  kind: string;
  etag: string;
  id: Id;
  snippet: Snippet;
  statistics: Statistics;
}

interface CardsState {
  [cardKey]: CardInfo[];
}

export interface SearchState {
  [searchKey]: Item[];

}

const initCardState: CardsState = {
  [cardKey]: [],
};

const initSearchState: SearchState = {
  [searchKey]: [],
};

export {
  cardKey,
  CardInfo,
  CardsState,
  initCardState,
  initSearchState,
};
