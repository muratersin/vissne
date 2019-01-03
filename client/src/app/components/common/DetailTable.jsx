import React from 'react';
import PropTypes from 'prop-types';

const DetailTable = ({ movie }) => (
  <table className="table is-fullwidth is-striped is-responsive">
    <tbody>
      <tr>
        <th>Title</th>
        <td>{`${movie.orginalTitle} (${movie.year})`}</td>
      </tr>
      <tr>
        <th>Rating</th>
        <td>{`${movie.vote_average} (${movie.vote_count})`}</td>
      </tr>
      <tr>
        <th>Release Date</th>
        <td>{movie.release_date}</td>
      </tr>
      <tr>
        <th>Genres</th>
        <td>{movie.genreNames}</td>
      </tr>
      <tr>
        <th>Tagline</th>
        <td>{movie.tagline}</td>
      </tr>
      <tr>
        <th>Countries</th>
        <td>{movie.countries}</td>
      </tr>
      <tr>
        <th>Languages</th>
        <td>{movie.language}</td>
      </tr>
      <tr>
        <th>Director</th>
        <td>{movie.director}</td>
      </tr>
      <tr>
        <th>Writer</th>
        <td>{movie.writer}</td>
      </tr>
      <tr>
        <th>Homepage</th>
        <td>
          <a href={movie.homepage} rel="noopener noreferrer" target="_blank">{movie.homepage}</a>
        </td>
      </tr>
    </tbody>
  </table>

);

DetailTable.propTypes = {
  movie: PropTypes.shape({
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
  }).isRequired,
};

export default DetailTable;
