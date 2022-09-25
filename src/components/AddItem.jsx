import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        required
        placeholder="Add Item"
        autoFocus
        onChange={(e) => setNewItem(e.target.value)}
        value={newItem}
      />
      <button type="submit" aria-label="add item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
