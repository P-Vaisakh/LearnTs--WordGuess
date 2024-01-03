import { alphabetArray } from "./arr";

type Props = {
  setLetters: React.Dispatch<React.SetStateAction<string[]>>;
  guessedLetters: string[];
  wrongGuess: string[];
};

const KeyBoard = ({ setLetters, guessedLetters, wrongGuess }: Props) => {
  return alphabetArray.map((i) => (
    <button
      onClick={() => setLetters([...guessedLetters, i])}
      key={i}
      value={i}
      disabled={
        guessedLetters.includes(i) || wrongGuess.length === 5 ? true : false
      }
      className="w-16 h-16 border border-black items-center uppercase disabled:bg-gray-500 hover:bg-gray-200 focus:bg-gray-200 flex justify-center"
    >
      {i}
    </button>
  ));
};

export default KeyBoard;
