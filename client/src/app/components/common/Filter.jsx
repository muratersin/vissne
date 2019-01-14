import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GenreShape, FilterShape } from '../../../lib/prop-shapes';
import { SORT_OPTIONS } from '../../actions/ActionTypes';

import './Filter.scss';

function switchSortQuery(sortBy) {
  const [name, kind] = sortBy.split('.');
  const value = `${name}.${kind === 'desc' ? 'asc' : 'desc'}`;
  return {
    field: 'sortBy',
    value,
  };
}

function addGenreId(value, currentGenres) {
  const index = currentGenres.indexOf(value);
  if (index === -1) {
    currentGenres.push(value);
  } else {
    currentGenres.splice(index, 1);
  }
  return currentGenres;
}

function handleChangeYear(year, setQuery) {
  if (year.length === 4 && !Number.isNaN(year)) {
    setQuery({
      field: 'year',
      value: year,
    });
  } else if (year === '') {
    setQuery({
      field: 'year',
      value: null,
    });
  }
}

const Filter = (props) => {
  const {
    genres,
    setQuery,
    query,
  } = props;

  const sortIconClass = query.sortBy.split('.')[1] === 'desc'
    ? 'down'
    : 'up';

  const sortOptions = SORT_OPTIONS.map((sort) => {
    const key = sort.name.replace(/ /g, '_').toLocaleLowerCase();
    return (
      <option key={key} value={`${key}.${sort.value}`}>
        {sort.name}
      </option>
    );
  });

  const genreOptions = genres.map(g => (
    <option key={g.id} value={g.id} className={query.withGenres.indexOf(`${g.id}`) === -1 ? '' : 'selected'}>
      {g.name}
    </option>
  ));

  return (
    <div className="row mb-2">
      <div className="col-xs-6 col-sm-4 col-md-3">
        <input
          type="text"
          placeholder="Search"
          className="form-control filter-input"
          value={query.searchText}
          onChange={$event => setQuery({ field: 'searchText', value: $event.target.value })}
        />
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <select
          name="genre"
          className="form-control filter-input"
          onChange={$event => setQuery({ field: 'withGenres', value: addGenreId($event.target.value, query.withGenres) })}
        >
          <option value="">Genres</option>
          {genreOptions}
        </select>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <div className="input-group">
          <select
            name="sortBy"
            className="form-control filter-input"
            id="sortOptionSelect"
            aria-label="Sort options"
            value={query.sortBy}
            onChange={$event => setQuery({ field: 'sortBy', value: $event.target.value })}
          >
            <option value="">Sort By</option>
            {sortOptions}
          </select>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-outline-secondary filter-input-button"
              onClick={() => setQuery(switchSortQuery(query.sortBy))}
            >
              <FontAwesomeIcon icon={`sort-amount-${sortIconClass}`} />
            </button>
          </div>
        </div>
      </div>
      <div className="col-xs-6 col-sm-4 col-md-3">
        <input
          type="text"
          placeholder="Year"
          className="form-control filter-input"
          onChange={$event => handleChangeYear($event.target.value, setQuery)}
        />
      </div>
    </div>
  );
};

Filter.propTypes = {
  genres: PropTypes.arrayOf(GenreShape).isRequired,
  query: FilterShape.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default Filter;
