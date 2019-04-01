import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, id) => (
          <Tab
            tab={tab}
            selectedTabHandler={props.selectedTabHandler}
            selectedTab={props.selectedTab}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func
}

export default Tabs;
