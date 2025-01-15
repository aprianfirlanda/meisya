import PropTypes from 'prop-types';

function EmptyDataTable({ colSpan }) {
  return (
    <tr>
      <td colSpan={colSpan} style={{ textAlign: 'center' }}>
        Data Kosong
      </td>
    </tr>
  );
}

EmptyDataTable.propTypes = {
  colSpan: PropTypes.number.isRequired,
};

export default EmptyDataTable;
