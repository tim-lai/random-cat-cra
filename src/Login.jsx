import React, { Component }  from 'react';
import Cookies from 'universal-cookie';
import ApiService from './api.service';

const cookies = new Cookies();

class Login extends Component {
 constructor(props) {
   super(props);
   // console.log('Login props:', props);
   this.state = {
     username: '',
     password: '',
     isLoggedIn: false,
   };
   this.handleChangeUsername = this.handleChangeUsername.bind(this);
   this.handleChangePassword = this.handleChangePassword.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.loginUser = this.loginUser.bind(this);
   this.logoutUser = this.logoutUser.bind(this);
   this.checkAuthentication = this.checkAuthentication.bind(this);
 };

 handleChangeUsername(event) {
   this.setState({ username: event.target.value });
 };

 handleChangePassword(event) {
   this.setState({ password: event.target.value });
 };

 handleSubmit(event) {
   // stop default browser behavior
   event.preventDefault();
   this.loginUser();
 };

 loginUser() {
   const data = {
     username: this.state.username,
     password: this.state.password
   };
   // for future use, if needed
   const config = {};
   ApiService.loginUser({ data, config })
     .then((result) => {
       // console.log('ApiService.loginUser result:', result);
       if (result.message !== 'Authenticated') {
         // console.log('ApiService.loginUser result: Unauthorized');
         return;
       }
       // console.log('ApiService.loginUser result: Authenticated');
       let cookieValue = result.data.accessToken;
       const { history } = this.props;
       cookies.set('accessToken', cookieValue);
       // console.log('...new cookie should be set:', cookies.getAll());
       // clear form before redirect
       this.setState({ username: '', password: '' });
       history.replace({ pathname: '/randomcat' });
     })
     .catch((error) => {
       console.log('ApiService.loginUser error:', error);
     });
 };

 logoutUser(){
   cookies.remove('accessToken');
   this.setState({ isLoggedIn: false });
 };

 checkAuthentication() {
   ApiService.getLoginStatus()
     .then((result) => {
       // console.log('Login.checkAuthentication result:', result);
       if (result.data !=='Authenticated') {
         // console.log('not authenticated. do nothing...');
         return;
       }
       this.setState({ isLoggedIn: true });
     })
     .catch((error) => {
       console.log('authentication error.');
     });
 };

 render() {
   return (
     <div className="login-form">
       <form onSubmit={this.handleSubmit}>
         <label>Username:</label><br />
         <input type="text" value={this.state.username} onChange={this.handleChangeUsername} /><br />
         <label>Password:</label><br />
         <input type="text" value={this.state.password} onChange={this.handleChangePassword} /><br />
         <input type="submit" value="Login" />
       </form>
       <button onClick={() => this.checkAuthentication()}>Check Authentication</button>
       { this.state.isLoggedIn ?
         <button onClick={() => this.logoutUser()}>Logout</button>
         : null
       }
     </div>
   )
 };
};

 export default Login;
