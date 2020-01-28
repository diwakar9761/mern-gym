import React from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => (
  <div>
    {true ? (<Route path={props.path} component={props.component} />) : (<Redirect to={{pathname: '/not-found'}} />)}
  </div>
)

export default PrivateRoute;