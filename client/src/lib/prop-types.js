import PropTypes from 'prop-types';

//#region Types
const User = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  fullName: PropTypes.string,
});

const Movie = PropTypes.shape({
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

const Cast = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profilePath: PropTypes.string.isRequired,
});

const Company = PropTypes.shape({
  id: PropTypes.number,
  logo: PropTypes.string,
  name: PropTypes.string,
});

const Genre = PropTypes.spahe({

});

const Filter = PropTypes.spahe({

});
//#endregion

//#region Alert
export const alertPropTypes = {
  show: PropTypes.bool,
  message: PropTypes.string,
  toggleAlert: PropTypes.func.isRequired,
  kind: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};

export const alertDefaultProps = {
  show: false,
  kind: 'info',
  message: null,
};
//#endregion

//#region Cast
export const castPropTypes = Cast;
//#endregion

//#region CastList
export const castListPropTypes = {
  casts: PropTypes.arrayOf(Cast).isRequired,
};
//#endregion

//#region Company
export const companyPropTypes = Company;

export const defaultCompanyProps = {
  logo: '',
  name: 'Company',
};
//#endregion

//#region Company List
export const companyListPropTypes = {
  companies: PropTypes.arrayOf(Company).isRequired,
};
//#endregion

//#region Detail Table
export const detailTablePropTypes = {
  movie: Movie.isRequired,
}
//#endregion

//#region Filter
export const filterPropTypes = {
  genres: PropTypes.arrayOf(Genre).isRequired,
  filter: Filter.isRequired,
}
//#

//#region Movie Card
export const movideCardPropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};
//#endregion

//#region Movie List
export const movieListPropTypes = {
  movies: PropTypes.arrayOf(Movie).isRequired,
};
//#endregion

//#region Navbar
export const navbarPropTypes = {
  isLoggedIn: PropTypes.bool,
  user: User,
}

export const navbarDefaultProps = {
  isLoggedIn: false,
  user: {},
}
//#endregion

//#region Progress Bar
export const progressBarDefaultProps = {
  show: false,
};

export const progressBarPropTypes = {
  show: PropTypes.bool,
};
//#endregion

//#region Spinner
export const spinnerDefaultProps = {
  show: false,
  size: 'sm',
  kind: 'grow',
  color: 'primary',
};

export const spinnerPropTypes = {
  show: PropTypes.bool,
  size: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl',
  ]),
  kind: PropTypes.oneOf([
    'border',
    'grow',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
  ]),
};
//#endregion

//#region Video
export const videoPropTypes = {
  videoKey: PropTypes.string.isRequired,
}
//#

//# Movie Component
export const movieDefaultProps = {
  isLoggedIn: false,
};

export const moviePropTypes = {
  getMovieDetail: PropTypes.func.isRequired,
  detail: PropTypes.instanceOf(Object).isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  user: User.isRequired,
  isLoggedIn: PropTypes.bool,
};
//#endregion


//# App
export const appDefaultProps = {
  isLoggedIn: false,
  user: {},
};

export const appPropTypes = {
  getMovies: PropTypes.func.isRequired,
  getGenres: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool,
  user: User,
  page: PropTypes.number.isRequired,
  movies: PropTypes.arrayOf(Movie).isRequired,
  genres: PropTypes.arrayOf(Genre).isRequired,
  filter: Filter.isRequired,
};
//#
