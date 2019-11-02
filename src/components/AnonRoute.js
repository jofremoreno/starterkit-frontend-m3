import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from '../Context/AuthContext';

function AnonRoute({ component: Comp, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedin ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/geolocation", //private Thor
            }}
          />
        )
      }
    />
  );
}

export default withAuth(AnonRoute);
