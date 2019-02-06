import PropTypes from 'prop-types';

export const UserShape = PropTypes.shape({
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  fullName: PropTypes.string,
  avatar: PropTypes.string,
  userName: PropTypes.string,
});

export const MovieShape = PropTypes.shape({
  title: PropTypes.string,
  orginalTitle: PropTypes.string,
  year: PropTypes.string,
  vote_count: PropTypes.number,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  genreNames: PropTypes.string,
  homepage: PropTypes.string,
  tagline: PropTypes.string,
  language: PropTypes.string,
});

export const CastShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
});

export const CompanyShape = PropTypes.shape({
  id: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
});

export const GenreShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const matchShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

export const FilterShape = PropTypes.shape({
  sort: PropTypes.string,
  searchText: PropTypes.string,
  genres: PropTypes.arrayOf.string,
  crews: PropTypes.arrayOf.string,
  casts: PropTypes.arrayOf.string,
  voteAverage: PropTypes.shape({
    lte: PropTypes.number,
    gte: PropTypes.number,
  }),
  releaseYear: PropTypes.shape({
    lte: PropTypes.number,
    gte: PropTypes.number,
  }),
});
