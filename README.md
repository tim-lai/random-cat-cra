## Available Scripts

Install dependencies:
### `npm i`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Additional Notes:
1. There exists a "Check Authentication" button on the Login page.
* If button clicked, and you are logged in, you will see a "Logout button"
* If button clicked, and no visible change, then you are not logged in.
2. For dev purposes, note the `proxy` specifying the proxy port to the backend server, as defined in `package.json`. CRA defaults to port 3000.
3. There exists a sample page for `randomcat2` that does not use HOC, or authentication. It is for demonstration purposes.
4. Available pages:
```
/login
/randomcat (auth protected)
/randomcat2
```


## Known Areas of Improvement:
1. API endpoint to login user currently returns a res.cookie and a duplicate copy in res.data.data.accessToken. Current front-end implementation expects this res.data cookie value.
2. React will give the following warning in certain routing cases. It has been resolved for the case where a user logs in, goes to the /login page, "checks authentication", then logs out. However, for invalid route name handling, this warning will still occur. Using Redux and avoiding use of setState alleviates this problem.
```
Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method
```
3. React will give a warning for the pre-existing `CatImage.jsx` component. This should be an easy fix.
```
img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
```
