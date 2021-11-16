import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { WatchList } from './../../components/WatchList';

import {
  Container,
  Cover,
  CoverContainer,
  Logo,
  Search,
  SearchField,
  Videos,
} from './styles'
import { useHistory } from 'react-router';

interface TMDBRequestParams {
  page: number;
}
interface MovieItemAPI {
  id: number,
  title: string;
  poster_path: string;
  vote_average: number;
}
export interface Movie {
  id: number;
  title: string;
  poster: string;
  rating: number;
}

export function Home() {

  // movies list
  const [watchList, setWatchList] = useState<Array<Movie[]>>([]);

  // list title
  const watchListTitles = [
    'Top filmes 😎',
    '🥰 Queridinhos da familía',
    '🧛‍♂️🥷🦸‍♀️',
    '🔥 Em alta',
    'Especial para você 💅'
  ];

  // set max movies lists
  const maxLists: number = 5;

  // history to navigate
  const history = useHistory();

  /**
   * Create movies lists to watch
   */
  async function createList({ page }: TMDBRequestParams) {

    // get movie datas
    const { data } = await axios.get(`/list/${page}`, {
      params: {
        language: 'pt-BR'
      }
    });

    // mount a new list
    const newWatchList = data.items
      .filter((item: { adult: boolean }) => item.adult !== true) // filter movies that is not adult only
      // loop movies data
      .map((movie: MovieItemAPI) => {
        return {
          id: movie.id,
          title: movie.title,
          poster: movie.poster_path,
          rating: movie.vote_average / 2
        }
      })

    setWatchList((oldWatchList: Array<Movie[]>) => {
      return oldWatchList.concat([newWatchList])
    });

  }

  useEffect(() => {

    // array looping
    for (let i = 0; i < maxLists; i++) {

      // plus one with the index count
      const page: number = i + 1;

      // create the list
      createList({ page });

    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Cover>
        <CoverContainer>
          <Logo />
        </CoverContainer>
      </Cover>
      <Search>
        <SearchField onKeyDown={(e) => {
          if (e.key === 'Enter') {
            return history.push('/watch')
          }
        }} />
      </Search>
      <Videos>
        {watchList.map((watch, index) => {
          return <WatchList
            key={index}
            title={watchListTitles[index % maxLists]}
            items={watch}
          />
        })}
      </Videos>
    </Container>
  );

}