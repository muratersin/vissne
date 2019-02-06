import React from 'react';

import { MovieShape } from '../../lib/prop-shapes';

const DetailTable = ({ movie }) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{`${movie.orginalTitle} (${movie.year})`}</h5>
      <table className="table table-striped table-responsive-sm table-responsive-xs">
        <tbody>
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
    </div>
  </div>
);

DetailTable.propTypes = {
  movie: MovieShape.isRequired,
};

export default DetailTable;
