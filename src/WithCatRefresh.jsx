import React, { Component }  from 'react';
import ApiService from './api.service';

/**
 * Higher Order Components:
 * The idea here is to create a wrapper around a component that allows
 * you to add functionality to that component without modifying the
 * component directly.
 */

/**
 * @todo:
 * Add necessary functionality to this function to accomplish the following:
 * 1. When component mounts, it should automatically request a new cat image
 *    from the api.
 * 2. The url of the current cat image should be passed down to the component
 *    being wrapped.
 * 3. Render a refresh button below the component we are wrapping that fetches
      a new cat image on click.
 */
export default function WithCatRefresh(BaseComponent) {
  return class WrappedCat extends Component {
    constructor(props) {
      super(props);
      // console.log('WithCatRefresh props:', props);
      this.getCatImage = this.getCatImage.bind(this);
      this.onChangeImage = this.onChangeImage.bind(this);
      this.submit = this.submit.bind(this);
      this.state = {
        catUri: '',
      };
    }

    getCatImage() {
      // console.log('inside getCatImage');
      ApiService.getRandomCatImage()
        .then((result) => {
          // console.log('we got result.data:', result.data);
          if(result.data[0].url) {
            this.onChangeImage(result.data[0].url);
          }
        })
        .catch((error) => {
          // console.log('we got error:', error);
        });
    }

    onChangeImage(url) {
      this.setState({catUri: url});
    }

    componentDidMount() {
      this.getCatImage();
    }

    submit() {
      // console.log('submit button clicked');
      this.getCatImage();
    }

    render() {
      return (
        <div className="random-cat-container">
          <h3>The RandomCat HOC Container</h3>
          <button onClick={() => this.submit()}>Refresh Image</button>
          <br />
          <BaseComponent url={this.state.catUri} />
        </div>
      )
    }
  };
};
