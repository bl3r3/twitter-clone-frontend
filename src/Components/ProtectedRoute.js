import React,{useEffect, useState} from "react";
import { Route, Redirect } from "react-router-dom";
import { TOKEN } from "../constants";
import {reauthenticate, getToken} from "../utils";
import UserContext  from "../Context/UserContext";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const token = getToken()
  const [information, setInformation] = useState(undefined)

  useEffect(() => {
    reauthenticate(token)
    .then(data => {
    if(data){
    setInformation(data)
    }
    })
    .catch(err => alert(err))
    }, [token])

  return (
    <UserContext.Provider value={{...information}} >
    <Route
      {...rest}
      render={(props) => {
          if (token) {
            return  <Component {...rest} {...props} />;
          } else {
            return <Redirect to="/login" />
          }
      }}
    />
    </UserContext.Provider>
  );
};

export default ProtectedRoute;
