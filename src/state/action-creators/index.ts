import axios from "axios";
import { Dispatch } from "redux";

import { Action } from "../actions";
import { ActionType } from "../action-types";

const API_URL = process.env.REACT_APP_API;

export const getProducts = (limit: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_PRODUCT_DATA });
    try {
      const { data } = await axios.get(`${API_URL}?page=1&per_page=${limit}`);

      dispatch({
        type: ActionType.FETCH_PRODUCT_DATA_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.FETCH_PRODUCT_DATA_ERROR,
        payload: err.message,
      });
    }
  };
};
