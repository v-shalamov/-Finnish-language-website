import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loadParagraphs } from './articlesAction';
import styles from './Products.module.css'

const Articles: FC = () => {
  const { articles, isLoading, error } = useAppSelector(state => state.articles)
  
  const dispatch = useAppDispatch()
    useEffect(() => {
        console.log("UUU")
     dispatch(loadParagraphs())
  }, [])
  
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}

      {error && <h1>Ошибка:{error}</h1>}

      

    </div>
  )
}

export default Articles

// className={styles.productList}

//{articles && <ul >
   // {articles?.map((el) => (
      //<li key={el.id}></li>
   // ))}