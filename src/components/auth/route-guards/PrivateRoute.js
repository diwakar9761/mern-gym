import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => (
  <div>
    {props.authed ? (<Route path={props.path} component={props.component} />) : (<Redirect to={{pathname: '/login'}} />)}
  </div>
)

export default PrivateRoute;