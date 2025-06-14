// InventoryForm.jsx placeholder
import React from 'react';

const AdminTable = ({ columns, data }) => (
  <table>
    <thead>
      <tr>{columns.map(col => <th key={col}>{col}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {columns.map(col => <td key={col}>{row[col]}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);

export default AdminTable;
