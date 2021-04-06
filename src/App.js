import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

async function App() {

  const response = await API.get('nodeapi', '/hello');
  
  return (
    <div className="App">
      <h1>{response}</h1>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);