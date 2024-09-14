export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, data: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    case "ADD_FAV":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DEL_FAV":
      return { ...state, favs: state.favs.filter((fav) => fav.id != action.payload) }
    default:
      return state;
  }
};