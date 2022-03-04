const initState = {
  count: 1,
  glasses: [],
  loading: false,
  hasMoreData: true
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_SPEC_LIST":
      return {
        ...state,
        glasses: action.payload.pageNo === 1 ? action.payload.glasses : [...state.glasses,...action.payload.glasses],
        hasMoreData: action.payload.glasses.length === 0 ? false : true
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default mainReducer;
