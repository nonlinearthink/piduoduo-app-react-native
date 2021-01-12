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
