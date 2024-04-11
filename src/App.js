import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import { PrivetRoute } from "./components/PrivetRoute";
import Profile from "./components/profile";

import NotificationsPage from "./components/NotificationsPage";
import Articles from "./components/articles";
import AboutUs from "./components/aboutus";
import RulesPage from './components/Rules'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivetRoute>
              <Home />
            </PrivetRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        
        <Route
          path="/profile"
          element={
            <PrivetRoute>
              <Profile />
            </PrivetRoute>
          }
        />

        <Route
          path="/notification"
          element={
            <PrivetRoute>
              <NotificationsPage />
            </PrivetRoute>
          }
        />
        <Route
          path="/articles"
          element={
            <PrivetRoute>
              <Articles />
            </PrivetRoute>
          }
        />
        <Route
          path="/aboutUs"
          element={
            <PrivetRoute>
              <AboutUs />
            </PrivetRoute>
          }
        />
        <Route
          path="/Rules"
          element={
            <PrivetRoute>
              <RulesPage />
            </PrivetRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
