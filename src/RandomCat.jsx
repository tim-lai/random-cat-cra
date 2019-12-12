import React, { Component }  from 'react';
import { CatImage } from './CatImage';
import WithCatRefresh from './WithCatRefresh';

/**
 * Make and export a "RandomCat" component using CatImage and WithCatRefresh
 * to render an image of a cat with a refresh button.
 */
const RandomCatWithCatRefresh = WithCatRefresh(CatImage);

class RandomCat extends Component {
  render() {
    return (
      <div className="random-cat">
        <RandomCatWithCatRefresh {...this.props} />
      </div>
    )
  }
};

export default RandomCat;
