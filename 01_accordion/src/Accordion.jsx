import PropTypes from 'prop-types';


const AccordionItem = ({ id, title, info, toggleAccordion, isActive }) => {
  // every time you click on + or - button, we are sending that particular clicked accordion component id to the function (which is in the parent component ex; App.jsx)
  const handleClick = () => {
    //id is part of the data.js
    toggleAccordion(id);
  };

  return (
    <div className='accordion-container'>
      <h2>{title}</h2>
      <button onClick={handleClick} aria-expanded={isActive}>
        {isActive ? '-' : '+'}
      </button>
      {isActive && <p>{info}</p>}
    </div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  toggleAccordion: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default AccordionItem;
