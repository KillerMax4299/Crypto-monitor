import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import "../../../App.css";
const Topbar = ({ changeTheme ,dark}) => {
  return (
    <div className="flex flex-col-reverse items-center md:flex-row-reverse  mt-8 md:my-0 xl:mx-6">
      <Link to={"/telegram"}>
        <div
          className="flex items-center space-x-2 w-max text-xl text-white bg-teal-600 dark:bg-teal-400 px-2 rounded-xl font-bold h-10 cursor-pointer"
          style={{ fontFamily: "Barlow Condensed" }}
        >
          <FaTelegramPlane />
          <span>Connect Telegram</span>
        </div>
      </Link>
      {dark ? (
        <button
          className="m-4 mx-6 text-indigo-300 text-2xl"
          onClick={changeTheme}
        >
          <BsFillMoonStarsFill />
        </button>
      ) : (
        <button
          className="m-4 mx-6 text-red-400 text-2xl"
          onClick={changeTheme}
        >
          <BsSunFill />
        </button>
      )}
    </div>
  );
};

export default Topbar;
