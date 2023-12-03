import React, { useState } from 'react';

const Tab = ({ id, activeTab, setActiveTab, label }) => {
  const isActive = activeTab === id;

  const handleClick = () => {
    setActiveTab(id);
  };

  // Handling keyboard events with arrow keys (left and right)
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      setActiveTab((prevActiveTab) => (prevActiveTab % 3) + 1);
    } else if (event.key === 'ArrowLeft') {
      setActiveTab((prevActiveTab) =>
        prevActiveTab === 1 ? 3 : prevActiveTab - 1
      );
    }
  };

  return (
    <button
      className={isActive ? 'tab active' : 'tab'}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0} // Makes the element focusable
      aria-selected={isActive ? 'true' : 'false'} // ARIA attribute for accessibility
    >
      {label}
    </button>
  );
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const content = {
    1: 'Content for tab 1',
    2: 'Content for tab 2',
    3: 'Content for tab 3',
  };

  return (
    <div className='container'>
      <div className='tabs-container'>
        <div className='tabs-header' role='tablist' aria-label='Sample Tabs'>
          <Tab
            id={1}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label='Tab 1'
          />
          <Tab
            id={2}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label='Tab 2'
          />
          <Tab
            id={3}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            label='Tab 3'
          />
        </div>
        <div
          className='tab-content'
          tabIndex={-1}
          role='tabpanel'
          aria-labelledby={`tab${activeTab}`}
        >
          {content[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
