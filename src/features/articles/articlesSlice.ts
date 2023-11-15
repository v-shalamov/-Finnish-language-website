import { createSlice } from '@reduxjs/toolkit';
import ArticlesState from './types/ArticlesState';
import { loadParagraphs } from './articlesAction';

// создали начальное значение для стейта
const initial: ArticlesState = {
  articles: undefined,
  error: null,
  isLoading: false
}

// написали сам файл slice с разными сценариями для asyncThunk (нашего асинхронного запроса)
export const articlesSlice = createSlice({
  name: 'articles', // уникальное имя
  initialState: initial, // начальное значение
  reducers: {}, // логика для синхронных операций (здесь их пока нет)
  extraReducers: (builder) => { // логика для асинхронных запросов
    builder
      .addCase(loadParagraphs.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadParagraphs.fulfilled, (state, action) => {
        state.isLoading = false
        state.articles = action.payload
      })
      .addCase(loadParagraphs.rejected, (state, action) => {
        state.isLoading = false
        state.articles = undefined
        state.error = action.payload as string
      })
  }
})