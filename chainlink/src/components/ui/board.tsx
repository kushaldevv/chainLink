import React from 'react';
import { BoardProps } from '../../types';

const Row = ({ word, entered }: { word: string[], entered: number }) => {
    const textColor = entered === 1 ? 'text-green-500' : entered === -1 ? 'text-red-500' : 'text-black';
    const borderColor = entered === 1 ? 'border-green-500' : entered === -1 ? 'border-red-500' : 'border-black';

    return (
        <div className={`flex space-x-2 ${textColor}`}>
            {word.map((letter, index) => (
                <div key={word.join('') + index} className={`aspect-square h-12 border-2 ${borderColor} text-3xl font-bold flex items-center justify-center`}>
                    {letter == '_' ? '' : letter.toUpperCase()}
                </div>
            ))}
        </div>
    );
}

const Board = ({ board }: { board: BoardProps }) => {
    return (
        <div className='space-y-2 py-4'>
            {board.status.map((word, i) => (<Row key={word.join('')} word={word} entered={board.entered[i]} />))}
        </div>
    );
};

export default Board;