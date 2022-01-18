import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "@my-app/app/src/redux/storeWeb";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App";

export const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};
