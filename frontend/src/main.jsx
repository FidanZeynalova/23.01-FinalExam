import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import FavoritesContextProvider from "./context/FavoritesContext.jsx";
import BasketContextProvider from "./context/BasketContext.jsx";

createRoot(document.getElementById("root")).render(
  <BasketContextProvider>
    <FavoritesContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </FavoritesContextProvider>
  </BasketContextProvider>
);
