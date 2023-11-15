import Articles from './Articles';

export default interface ArticlesState {
    articles: Articles | undefined
    error?: null | string
    isLoading?: boolean
  }