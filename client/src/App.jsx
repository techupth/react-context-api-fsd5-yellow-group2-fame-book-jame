import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { createContext } from "react";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";

export const UserDataContext = createContext();

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <UserDataContext.Provider value={userData}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/view/:id" element={<ViewProductPage />} />
          </Routes>
        </Router>
      </div>
    </UserDataContext.Provider>
  );
}

export default App;
