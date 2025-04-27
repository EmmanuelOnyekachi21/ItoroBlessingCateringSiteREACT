import React from 'react';
import ButtonMenu from './ButtonMenu';

/**
 * Renders the group of category navigation buttons.
 */
const ButtonNavigation = ({ buttonGroup, selectedCategory, click, categories }) => {
  return (
    <div className={`${buttonGroup}`} role='tablist'>
      {categories.map((cat) => (
        <ButtonMenu key={cat.id} selectedCategory={selectedCategory} cat={cat} click={click} />
      ))}
    </div>
  );
};

export default ButtonNavigation;
