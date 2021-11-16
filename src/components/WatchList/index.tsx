import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import { Movie as MovieInterface } from '../../screens/Home';

import {
  Container,
  Title,
  Movies,
  Movie,
  Poster,
  About,
  Name,
  Stars
} from './styles';

interface Props {
  title: string;
  items: MovieInterface[];
}

// internal component (no memoized)
function _WatchList({
  title,
  items
}: Props) {

  const [movies, setMovies] = useState<MovieInterface[]>(items);

  function handleRating(newRating: number, id: number) {
    setMovies(oldMovies => {
      const newMovies: MovieInterface[] = oldMovies.map(m => {
        return m.id === id ? {
          ...m,
          rating: newRating
        } : m;
      });
      return newMovies;
    })
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Movies>
        {movies.map(({ id, title, poster, rating }: MovieInterface) => {
          return <Movie
            key={id}
          >
            <Poster src={`https://image.tmdb.org/t/p/original/${poster}`} />
            <About>
              <Stars>
                <Rating
                  onClick={(rating) => {
                    handleRating(rating, id);
                  }}
                  size={20}
                  ratingValue={rating}
                />
              </Stars>
              <Name>{title}</Name>
            </About>
          </Movie>
        })}
      </Movies>
    </Container>
  );
}

// memoized component
export const WatchList = React.memo(_WatchList);