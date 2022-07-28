import React, { useEffect } from 'react'
import'./style.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCharacters } from '../redux/characterSlice';
import Masonry from 'react-masonry-css';
import Loadings from '../Components/Loadings';
import Error from '../Components/Error';
export default function Home() {
  const characters = useSelector((state) => state.characters.items);
  const isLoading = useSelector((state) => state.characters.isLoading);
  const nextPage = useSelector((state) => state.characters.page);

  const error = useSelector((state) => state.characters.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch])

if (isLoading) {
  return <Loadings />;
  
}
if (error) {
  return <Error message={error.message} />;
  
}

  return (
    <div>
      <h1>Characters</h1>
      <Masonry breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {characters.map((character) =>
          <div key={character.char_id}>
            <img alt={character.name} src={character.img} className="character"></img>
            <div className="name">{character.name}</div>
          </div>
        )
        }
      </Masonry>
      <div style={{padding:15,textAlign: 'center'}}><button onClick={()=>dispatch(fetchCharacters(nextPage))}>Load More{nextPage}</button></div>

    </div>
  )
}
