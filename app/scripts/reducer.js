export default function reducer(state, action) {
  switch (action.type) {
    case 'GITHUB_FOLLOWERS_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'GITHUB_FOLLOWERS_LOADED':
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case 'NAME_CHANGED':
      return {
        ...state,
        isLoading: false,
        name: action.payload
      };
    default:
      return state;
  }
}
