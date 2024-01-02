import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";


// redux store
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <GoogleOAuthProvider clientId="1038225626439-c0ko3dftb5ajfqcdfer9cmnlo9lauc4m.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </BrowserRouter>
);
