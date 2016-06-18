import React, { PropTypes } from 'react';

import { changeName, loadGithubFollowers } from '../actions';

const handleChangeName = (data) => () =>
  changeName(data);

const handleLoadFollowers = (data) => () =>
  loadGithubFollowers(data);


function renderUsers(users) {
  if (!users) return;
  return (
    <ul>{ users.map((user, index) => <li key={index}>{user}</li>) }</ul>
  );
}

export default function App(props) {
  const { isLoading, name, users } = props;
  return (
    <div>
      { isLoading ?
        <p>Loading...</p> :
        <h1>{ name }</h1> }
      { renderUsers(users) }
      <button onClick={handleChangeName('Harry')} >Harry</button>
      <button onClick={handleChangeName('Sally')} >Sally</button>
      <br />
      <button className="button primary" onClick={handleLoadFollowers('ryardley')} > Load Followers</button>
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
  users: PropTypes.array,
  isLoading: PropTypes.bool
};
