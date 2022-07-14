interface DataNews {
    status: string;
    totalResults: number;
    articles: Array<Article>;
}
  
interface DataSource{
    status?: string;
    sources: Array<Source>;
}
  
type Article = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: { id: string, name: string };
    title: string;
    url: string;
    urlToImage: string;
};
  
type Source = {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
};
interface GetResp {
    endpoint: string;
    options?: TypeGetResp;
}
  
interface Result {
    ok: boolean;
    status: number;
    statusText: string | undefined;
    json(): void;
}

type TypeCallback<T> = (data?: T) => void;

type TypeGetResp = {
    sources: string | null | number;
};

export {
    DataNews, DataSource, Source, Article, GetResp, Result, TypeCallback, TypeGetResp,
};