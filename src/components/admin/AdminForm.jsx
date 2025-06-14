// UserTable.jsx placeholder
import React from 'react';

const AdminForm = ({ fields, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    fields.forEach(field => {
      data[field.name] = e.target[field.name].value;
    });
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <input key={field.name} name={field.name} placeholder={field.label} required />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdminForm;
