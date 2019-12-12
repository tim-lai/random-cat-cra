import React, { Component }  from 'react';
import ApiService from './api.service';

/**
 * Non-HOC example
 * Button to refresh the image in a parent
 */

class WithCatRefresh extends Component {
  constructor(props) {
    super(props);
    // console.log('WithCatRefresh props:', props);
    this.getCatImage = this.getCatImage.bind(this);
    this.submit = this.submit.bind(this);
  }

  getCatImage() {
    // const originalImg = 'https://cdn2.thecatapi.com/images/bj5.jpg';
    // const toggleImg = 'https://cdn2.thecatapi.com/images/MTkyMDQxNg.jpg';
    ApiService.getRandomCatImage()
      .then((result) => {
        // console.log('we got result.data:', result.data);
        if(result.data[0].url) {
          this.props.onChangeImage(result.data[0].url);
        }
      })
      .catch((error) => {
        console.log('we got error:', error);
      });
  }

  componentDidMount() {
    this.getCatImage();
  }

  submit() {
    this.getCatImage();
  }

  render() {
    return (
      <div className="random-cat-container">
        <h3>Refresh The RandomCat Container</h3>
        <button onClick={ () => this.submit() }>Refresh Image</button>
      </div>
    )
  }
};

export default WithCatRefresh;
