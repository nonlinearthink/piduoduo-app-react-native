export interface Article {
  articleId: number;
  articleTitle: string;
  articleBody: string;
  time: number;
}

export interface HotComposition {
  compositionId: number;
  nickname: string;
  title: string;
  compositionBody: string;
  releaseTime: number;
  hotCount: number;
}

export interface FreshComposition {
  compositionId: number;
  nickname: string;
  title: string;
  compositionBody: string;
  releaseTime: number;
  historyCount: number;
  commentCount: number;
}

export interface Follow {
  username: string;
  nickname: string;
  signature: string;
}

export interface FollowComposition {
  compositionId: number;
  nickname: string;
  title: string;
  compositionBody: string;
  releaseTime: number;
  supportCount: number;
  commentCount: number;
  score: number;
}

export interface Composition {
  compositionId: number;
  username: string;
  releaseTime: number;
  compositionBody: string;
  status: number;
  title: string;
  visibility: number;
  score: number;
}
