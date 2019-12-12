import React, { Component }  from 'react';
import { CatImage } from './CatImage';
import WithCatRefreshAsComponent from './WithCatRefreshAsComponent';

/**
 * Make and export a "RandomCat" component using CatImage and WithCatRefreshAsComponent
 * to render an image of a cat with a refresh button.
 */

class RandomCat extends Component {
  constructor(props) {
    super(props);
    console.log('RandomCat props:', props);
    // initial (manual) state
    // this.state = {
    //   catUri: 'https://cdn2.thecatapi.com/images/bj5.jpg',
    // };
    this.state = {
      catUri: '',
    };
    console.log('RandomCat state:', this.state);
    this.onChangeImage = this.onChangeImage.bind(this);
  }

  onChangeImage(url) {
    this.setState({catUri: url});
  }

  render() {
    return (
      <div className="random-cat-container">
        <h2>The RandomCat Container</h2>
        <CatImage url={this.state.catUri} />
        <WithCatRefreshAsComponent catUri={this.state.catUri} onChangeImage={this.onChangeImage} />
      </div>
    )
  }
};

export default RandomCat;
