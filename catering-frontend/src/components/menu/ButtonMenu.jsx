import React from 'react';

/**
 * Single Category Button Component
 */
const ButtonMenu = ({ selectedCategory, click, cat }) => {
  return (
    <button
      type='button'
      className={`btn btn-outline-dark ${selectedCategory === cat.name ? 'active' : ''}`}
      onClick={() => click(cat.name)}
    >
      {cat.name}
    </button>
  );
};

export default ButtonMenu;
