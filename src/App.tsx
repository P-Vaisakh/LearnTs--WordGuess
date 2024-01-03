import { useState } from "react";
import "./App.css";
import { wordArr } from "./arr";
import { Rate } from "antd";
import KeyBoard from "./KeyBoard";

function App() {
  const [guessWord, setGuessWord] = useState<string[]>(
    wordArr[Math.floor(Math.random() * wordArr.length)].split("")
  );
  const [guessedLetters, setLetters] = useState<string[]>([]);

  const wrongGuess = guessedLetters.filter(
    (letter) => !guessWord.includes(letter)
  );

  return (
    <div className="flex flex-col items-center gap-2 px-4 py-2">
      <h3 className="text-2xl">
        {wrongGuess.length === 5 && "Nice try! refresh to play again."}
        {guessWord.every((i) => guessedLetters.includes(i)) &&
          "You win! refresh to play again"}
      </h3>
      <Rate value={5 - wrongGuess.length} disabled></Rate>
      <div className="flex flex-row gap-3 text-3xl font-bold uppercase ">
        {guessWord.map((letter, i) => (
          <div key={i} className="border-b-4 border-b-black w-8 text-center">
            <p
              className={`${
                guessedLetters.includes(letter) || wrongGuess.length === 5
                  ? "visible"
                  : "invisible"
              } ${
                guessedLetters.includes(letter)
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {letter}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center mt-5 gap-2 max-w-[800px]">
        <KeyBoard
          setLetters={setLetters}
          guessedLetters={guessedLetters}
          wrongGuess={wrongGuess}
        ></KeyBoard>
      </div>
    </div>
  );
}

export default App;
