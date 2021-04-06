import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
const response = await API.get('nodeapi', '/hello');

function App() {
  
  return (
    <div className="App">
      <h1>{response}</h1>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);