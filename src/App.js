import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Home from "./screens/Home/Home";
import Login from "./screens/Login/Login";
import api from './api/api';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

const App = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('')
  const [passSuccess, setPassSuccess] = useState()
  const [passError, setPassError] = useState('')
  const history = useHistory();


  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      passSuccess !== undefined ? (
        <Component {...props} />
        
      ) : (
        <Redirect to={{ pathname: '/', state: {from: props.location} }} />
      )
    )} />
  )

  const handleSubmit = async () => {
    const res = await api.post('login', {"email": emailInput, "password": passwordInput})
    if (res.data === 'Success'){
      setPassSuccess(true);
      console.log(res.data)
      history.push('/admin')
    }else{
        setPassError(res.data)
        console.log(res.data)
    }
    
}

  
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Login 
            handleSubmit={handleSubmit} 
            email={emailInput} 
            setEmail={setEmailInput} 
            password={passwordInput}
            setPassword={setPasswordInput}
            passError={passError}
          />
        </Route>
        <PrivateRoute path='/admin' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
