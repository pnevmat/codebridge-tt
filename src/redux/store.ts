import { createSlice, configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux';
import {card} from '../utils/types';

interface articleReducerType {
	articles: Array<card> | []
}

interface actionType {
	payload: any
	type: string
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState: {
    articles: []
  } as articleReducerType,
  reducers: {
    getArticles: (state: articleReducerType, action) => {
      state.articles = action.payload
    }
  }
})

export const { getArticles } = articlesSlice.actions

const store = configureStore({
  reducer: articlesSlice.reducer
})

export const useStore = () => useSelector((state: articleReducerType) => state)
export const dispatch = (action: actionType) => store.dispatch(action)

export default store