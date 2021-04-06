import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';
import { API } from 'aws-amplify';

function App() {

  const response = await API.get('nodeapi', '/hello');
  
  return (
    <div className="App">
      <h1>{response}</h1>
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default withAuthenticator(App);