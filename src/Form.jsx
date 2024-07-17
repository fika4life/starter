import { useState } from 'react';

const Form = ({ addNewItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" onSubmit={(e) => handleSubmit}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
