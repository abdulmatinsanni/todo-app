import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "state/store";
import Error404 from "components/pages/Error404";
import CreateTask from "components/pages/CreateTask";
import ListTask from "components/pages/ListTask";

const App = () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTask />} />;
        <Route path="/create" element={<CreateTask />} />
        <Route element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </StoreProvider>
);

export default App;
