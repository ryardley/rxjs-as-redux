import { actionCreator } from './rxflux';
import { Observable } from 'rxjs/Rx';
import { map } from 'lodash';

export const loadGithubFollowers = actionCreator((payload) => {
  const url = `https://api.github.com/users/${payload.username}/followers`;
  return {
    type: 'GITHUB_FOLLOWERS_LOADING',
    payload: Observable.ajax(url)
      .map((xhr) => map(xhr.response, 'login'))
      .map((followers) => ({
        type: 'GITHUB_FOLLOWERS_LOADED',
        payload: followers
      }))
  };
});

export const changeName = actionCreator((payload) => ({
  type: 'NAME_CHANGED',
  payload
}));
