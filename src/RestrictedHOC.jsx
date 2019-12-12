import React, { Component } from 'react';
import ApiService from './api.service';

/**
 * Higher-order component (HOC) to wrap restricted pages
 */
export default function HOC(BaseComponent) {
  return class Restricted extends Component {
    componentDidMount() {
      // console.log('BaseComponent props:', this.props);
      this.checkAuthentication(this.props);
    };

    checkAuthentication(params) {
      const { history } = params;
      ApiService.getLoginStatus()
        .then((result) => {
          // console.log('ApiService.getLoginStatus result:', result);
          if (result.data !=='Authenticated') {
            console.log('not authenticated. redirecting now...');
            history.replace({ pathname: '/login' });
            return;
          }
        })
        .catch((error) => {
          console.log('authentication error. redirecting now...');
          history.replace({ pathname: '/login' });
        });
    };

    render() {
      return <BaseComponent { ...this.props } />;
    };
  };
};
