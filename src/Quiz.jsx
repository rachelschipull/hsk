import React from "react";
import { levelOneWords } from "../data/levelOne";

function Quiz() {
  const listWords = levelOneWords.map((element) => {
    return (
      <ul type="disc">
        <li
          style={{
            fontWeight: "bold",
            color: "red",
          }}
        >
          {element.English}
        </li>
        <li>{element.Simplified}</li>
      </ul>
    );
  });
  return (
    <div>
      {/* grab random question and correct answer along with 3 random options */}
      {listWords}
    </div>
  );
}

export default Quiz;
