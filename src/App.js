import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import store from "state/store";
import Error404 from "components/pages/Error404";
import CreateTask from "components/pages/CreateTask";
import ListTask from "components/pages/ListTask";
import EditTask from "components/pages/EditTask";

const App = () => (
  <StoreProvider store={store}>
    <BrowserRouter>
      <div className="flex flex-row justify-center min-h-screen p-10 bg-gray-100">
        <div className="flex flex-col justify-start w-1/2">
          <Routes>
            <Route path="/" element={<Navigate replace to="/tasks" />} />
            <Route path="/tasks" element={<ListTask />} />;
            <Route path="/tasks/create" element={<CreateTask />} />
            <Route path="/tasks/edit/:id" element={<EditTask />} />
            <Route element={<Error404 />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </StoreProvider>
);

export default App;
