import React from 'react';

import Pagination from './Pagination';
import Alert from './Alert';

const createHeader = (fields) => {
  const visibleFields = fields
    .filter(f => !f.hidden)
    .map(f => <th scope="col">{f.title}</th>);

  return <tr>{visibleFields}</tr>;
};

const createBody = (data, fields) => {
  const tbody = [];

  data.forEach((item) => {
    const itemFields = [];

    fields.forEach((field) => {
      if (field.hidden) {
        return null;
      }

      const v = item[field.name];
      const value = field.format
        ? field.format(v)
        : v.toString();

      itemFields.push(<td>{value}</td>);
    });

    tbody.push(<tr>{itemFields}</tr>);
  });

  return tbody;
};

const createPagination = (options) => {
  if (!options) {
    return null;
  }

  const {
    limit,
    total,
  } = options;

  return (
    <div className="d-flex justify-content-between">
      <Pagination options={options} />
      <span>{`Show ${limit > total ? total : limit} result of ${total}`}</span>
    </div>
  );
};

const TableList = (props) => {
  const { data, fields, pagination } = props;

  if (!data || data.length === 0) {
    return (
      <div className="row mt-2">
        <div className="col d-flex">
          <Alert message="There were no result." kind="warning" />
        </div>
      </div>
    );
  }

  const heads = createHeader(fields);
  const body = createBody(data, fields);
  const paginationButtons = createPagination(pagination);

  return (
    <div className="row">
      <div className="col">
        <table className="table table-responsive">
          <thead>
            {heads}
          </thead>
          <tbody>
            {body}
          </tbody>
        </table>
        {paginationButtons}
      </div>
    </div>
  );
};

export default TableList;
