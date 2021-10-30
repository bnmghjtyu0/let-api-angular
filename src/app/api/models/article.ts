export interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: any[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}
