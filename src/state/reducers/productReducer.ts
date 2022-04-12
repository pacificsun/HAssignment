import { Action } from "../actions";
import { ActionType } from "../action-types";
interface productState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const productReducer = (
  state: productState = initialState,
  action: Action
): productState => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCT_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FETCH_PRODUCT_DATA_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_PRODUCT_DATA_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};
