import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    this.setState({ selected: tab })
  };

  filterCards = () => {

    this.state.cards = (
      this.state.selected === 'all' ?
        cardData :
        [...cardData].filter(card => card.tab === this.state.selected)
    );


    return this.state.cards;
  };

  render() {
    return (
      <div className="content-container">
        <Tabs
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectedTabHandler={this.changeSelected}
        />
        <Cards
          cards={this.filterCards()}
        />
      </div>
    );
  }
}
