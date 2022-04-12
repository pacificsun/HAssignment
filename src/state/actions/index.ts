import { ActionType } from "../action-types";

interface fetchProductAction {
  type: ActionType.FETCH_PRODUCT_DATA;
}
interface fetchProductSucessAction {
  type: ActionType.FETCH_PRODUCT_DATA_SUCCESS;
  payload: string[];
}
interface fetchProductErrorAction {
  type: ActionType.FETCH_PRODUCT_DATA_ERROR;
  payload: string;
}

// Type Union
export type Action =
  | fetchProductAction
  | fetchProductSucessAction
  | fetchProductErrorAction;
