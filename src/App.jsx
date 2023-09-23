import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import UIElelemts from "./Components/Mainpage/UIElements/UIElelemts";
import Heading from "./Components/Heading";
import Telegram from "./Components/Telegram";

const App = () => {
  const [dark, setDark] = useState(true);

  function changeTheme() {
    setDark(!dark);
  }
  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-sky-100 to-gray-50 dark:from-gray-800 dark:to-gray-950 md:px-8 px-3 py-6 transition-all duration-800">
        <Link to="/">
          <Heading />
        </Link>
        <Routes>
          <Route
            path="/"
            element={<UIElelemts changeTheme={changeTheme} dark={dark} />}
          />
          <Route path="/telegram" element={<Telegram />} />
        </Routes>
      </div>
    </>
  );
};
export default App;
