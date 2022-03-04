import axios from "axios";
export const getSpectaclesList = (pageNo, filter, collectionType) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING", payload: true });
    let res = await axios.get(
      `https://api.bloobloom.com/user/v1/sales_channels/website/collections/${collectionType}/glasses?sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=12&page[number]=${pageNo}&filters[frame_variant_home_trial_available]=false${filter}`
    );
    if (res) {
      if (res.status === 200) {
        dispatch({ type: "SET_SPEC_LIST", payload: {glasses:res.data.glasses, pageNo:pageNo} });
      }
    }
    dispatch({ type: "LOADING", payload: false });
  };
};
