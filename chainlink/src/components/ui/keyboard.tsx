import { BoardProps } from '../../types';
import { SetStateAction } from 'react';

export default function Keyboard({ board, setBoard }: {
    board: BoardProps; setBoard: (value: SetStateAction<BoardProps>) => void;
}) {
    const keys = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['↵', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
    ]

    const handleInput = (key: string) => {
        setBoard(prevBoard => {
            const newBoard = { ...prevBoard };
            const currentWordIndex = newBoard.entered.findIndex((flag) => flag === 0 || flag === -1);
            if (currentWordIndex === -1) return prevBoard;

            let currentLetterIndex = newBoard.status[currentWordIndex].findIndex(letter => letter === '_');
            if (currentLetterIndex === -1) currentLetterIndex = newBoard.status[currentWordIndex].length;

            if (key === '⌫') {
                if (currentLetterIndex === 1) return prevBoard;
                newBoard.status = newBoard.status.map((word, wordIndex) =>
                    wordIndex === currentWordIndex
                        ? word.map((letter, letterIndex) =>
                            letterIndex === currentLetterIndex - 1 ? '_' : letter
                        )
                        : word
                );
            } else if (key === '↵') {
                console.log(currentWordIndex, currentLetterIndex, board.words[currentWordIndex].length);
                if (currentLetterIndex !==  board.words[currentWordIndex].length) return prevBoard;
                console.log(board.words[currentWordIndex], board.status[currentWordIndex].join(''));
                if (board.words[currentWordIndex] != board.status[currentWordIndex].join('')) {
                    newBoard.entered[currentWordIndex] = -1;
                } else {
                    newBoard.entered[currentWordIndex] = 1;
                }
            }
            else {
                newBoard.status = newBoard.status.map((word, wordIndex) =>
                    wordIndex === currentWordIndex
                        ? word.map((letter, letterIndex) =>
                            letterIndex === currentLetterIndex ? key : letter
                        )
                        : word
                );
            }
            console.log(newBoard.entered);
            return newBoard;
        });
    };


    return (
        //   <div className="max-w-3xl mx-auto p-4">
        <div className="">
            <div className="grid gap-2">
                {keys.map((row, rowIndex) => (
                    <div key={row.join('') + rowIndex} className="flex justify-center gap-2">
                        {row.map((key) => (
                            <button
                                onClick={() => handleInput(key)}
                                key={key}
                                className={`
                      bg-gray-100 text-gray-800 font-semibold py-2 px-[0.55rem] rounded text-xl font-mono
                      shadow hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75
                      ${key === '↵' ? 'px-[1.1rem]' : ''}
                      ${key === '⌫' ? 'px-[1.1rem]' : ''}
                    `}
                            >
                                {key}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}