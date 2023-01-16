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

export interface ObjectVideo {
  etag:string
  items: Item[]
  kind: string
  pageInfo: Record< string, string>
}
