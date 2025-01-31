/* eslint-disable react/prop-types */
import { useState } from 'react';

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const display = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="about-container">
      <div className="collapse-container">
        <div className="collapse-dropdown">
          <h2 className="collapse-title">{title}</h2>
          <button onClick={display}>
            {isOpen ? (
              <i className="fa-solid fa-chevron-down"></i>
            ) : (
              <i className="fa-solid fa-chevron-down rotation"></i>
            )}
          </button>
        </div>
        {isOpen && (
          <div className="frame extend">
            <div className="collapse-content">{content}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
