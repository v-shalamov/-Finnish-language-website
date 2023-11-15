import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loadParagraphs = createAsyncThunk(
  'paragraphs/loadParagraphs',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('https://v-shalamov.github.io/API-for-article-paragraphs/articles.json')
      return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
