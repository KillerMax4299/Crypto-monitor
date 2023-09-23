import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Telegram = () => {
  return (
    <div
      className="mt-12 md:mt-16 flex flex-col text-blue-950 dark:text-white items-center "
      style={{ fontFamily: "Barlow Condensed" }}
    >
      {/* <h1 className="text-4xl flex items-center space-x-4 border w-auto"> */}
      <h1 className="flex items-center space-x-2 w-max text-3xl md:text-4xl font-bold m-4">
        <span>Connect</span>
        <FaTelegramPlane />
        <span>Telegram</span>
      </h1>
      <h1 className="text-2xl m-4 font-semibold">Add bot to your group</h1>
      <div className="flex flex-col items-center">
        <span className="text-xl font-light m-2">Manual :</span>
        <span className="text-xl font-light">1. Open the telegram app.</span>
        <span className="text-xl font-light">
          2. Open the group you want to add the bot to.
        </span>
        <span className="text-xl font-light">
          3. Click on add members in group settings.
        </span>
        <span className="text-xl font-light">
          4. Search @HodlInfoBot and click it.
        </span>
      </div>

      <div className="flex flex-col items-center m-4">
        <span className="text-xl font-light m-2">Automatic :</span>
        <span className="text-xl font-light text-center">
          Go to :{" "}
          <a
            target="_blank"
            href="https://t.me/HodlInfoBot?startgroup=true"
            className="underline underline-offset-4 decoration-1 hover:no-underline cursor-pointer"
          >
            https://t.me/HodlInfoBot?startgroup=true
          </a>
        </span>
      </div>
      {/* ------------------ */}
      <h1 className="text-2xl m-4 font-semibold">Chat with the bot</h1>
      <div className="flex flex-col items-center">
        <span className="text-xl font-light m-2">Manual :</span>
        <span className="text-xl font-light">1. Open the telegram app.</span>
        <span className="text-xl font-light">
          2. Click on the message button.
        </span>
        <span className="text-xl font-light">
          3. In search bar type HodlInfoBot.
        </span>
        <span className="text-xl font-light">4. Click on @HodlInfoBot.</span>
      </div>

      <div className="flex flex-col items-center m-4">
        <span className="text-xl font-light m-2">Automatic :</span>
        <span className="text-xl  font-light ">
          Go to :{" "}
          <a
            target="_blank"
            href="https://t.me/HodlInfoBot"
            className="underline underline-offset-4 decoration-1 hover:no-underline cursor-pointer"
          >
            https://t.me/HodlInfoBot
          </a>
        </span>
      </div>
    </div>
  );
};

export default Telegram;

// 1. Open the telegram app.
// 2. Open the group you want to add the bot to.
// 3. Click on add members in group settings.
// 4. Search @HodlInfoBot and click it.
