export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //remove after finished developing
  // token:
  // "BQDv6sTWs_5bcD9Bo6MeuCG4uIVsEVdNPmgMUnSVP1zBLbupKWcUyR7cfDpfzs_wh53cxNNKO42uHyraTWnI6_qT5CNusvaEijOROCcIKiIk0AyVqTsB647Bn-kY7Cpebg8vAvC4zvy51hX5NZMjANg8KHRpcixapdpb0Q91aGns88idYMWW",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_CURRENT_SONG":
      return {
        ...state,
        current_song: action.current_song,
      };
    case "SET_IS_SEARCH_ACTIVE":
      return {
        ...state,
        isSearchActive: action.isSearchActive,
      };
    default:
      return state;
  }
};

export default reducer;
