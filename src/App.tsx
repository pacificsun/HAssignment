import { Provider } from "react-redux";

import { store } from "./state";
import { ProductPage } from "./pages/productPage";

export const App = () => {
  return (
    <Provider store={store}>
      <ProductPage />
    </Provider>
  );
};
