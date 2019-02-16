import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import Pagination from '../Pagination';
import Alert from '../Alert';
import './TableList.scss';

const createHeader = (fields) => {
  const visibleFields = fields
    .filter(f => !f.hidden)
    .map(f => <th scope="col">{f.title}</th>);

  return <tr>{visibleFields}</tr>;
};

const createBody = (data, fields, selected, onSelect) => {
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

    tbody.push(
      <tr className={`${item.id === selected.id ? 'selected' : ''}`} onClick={() => onSelect(item)}>
        {itemFields}
      </tr>,
    );
  });

  return tbody;
};

const createPagination = (options, dataLength) => {
  if (!options) {
    return null;
  }

  return (
    <div className="d-flex justify-content-between">
      <Pagination options={options} />
      <span>{`Show ${dataLength} result of ${options.total}`}</span>
    </div>
  );
};

const TableList = (props) => {
  const {
    data,
    selected,
    fields,
    pagination,
    responsive,
    onCreate,
    onEdit,
    onDelete,
    onSelect,
  } = props;

  const btnGroup = (
    <div className={`btn-group w-100 ${(!onCreate && !onEdit && !onDelete) ? 'd-none' : ''}`} role="group" aria-label="crud">
      <button
        type="button"
        className={`btn btn-secondary rounded-0 btn-sm ${onCreate ? '' : 'd-none'}`}
        onClick={onCreate}
      >
        <FontAwesomeIcon icon="plus-square" />
        <span className="ml-1">Create</span>
      </button>
      <button
        type="button"
        className={`btn btn-secondary rounded-0 btn-sm ${onEdit ? '' : 'd-none'}`}
        onClick={onEdit}
      >
        <FontAwesomeIcon icon="edit" />
        <span className="ml-1">Edit</span>
      </button>
      <button
        type="button"
        className={`btn btn-secondary rounded-0 btn-sm ${onDelete ? '' : 'd-none'}`}
        onClick={onDelete}
      >
        <FontAwesomeIcon icon="trash" />
        <span className="ml-1">Delete</span>
      </button>
    </div>
  );

  if (!data || data.length === 0) {
    return (
      <div className="row mt-2">
        <div className="col">
          <Alert message="There were no result." kind="warning" />
          <button onClick={onCreate} className={`btn btn-outline-primary w-100 ${onCreate ? '' : 'd-block'}`} type="button">
            Add
          </button>
        </div>
      </div>
    );
  }

  const heads = createHeader(fields);
  const body = createBody(data, fields, selected, onSelect);
  const paginationButtons = createPagination(pagination, data.length);

  return (
    <div className="row mt-2">
      <div className="col">
        {btnGroup}
        <table className={`table v-table ${responsive ? 'table-responsive' : ''}`}>
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

TableList.defaultProps = {
  data: [],
  selected: {},
  fields: [],
};

TableList.propTypes = {
  data: PropTypes.instanceOf(Array),
  selected: PropTypes.instanceOf(Object),
  fields: PropTypes.instanceOf(Array),
};

export default TableList;
