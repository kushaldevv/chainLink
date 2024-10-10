import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Separator } from "./components/ui/separator"
import Board from "./components/ui/board"
import { BoardProps } from './types'
import Keyboard from './components/ui/keyboard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"


// chain link by Brad from https://thenounproject.com/browse/icons/term/chain-link/"
const ChainLink = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 100 100"
      x="0px"
      y="0px"
      className="w-10 h-10 inline-block -mx-1"
      fill='gray'
    >
      <title>Link</title>
      <path d="M24.406,67.83261H41.75361A17.70808,17.70808,0,0,0,50,65.79623a17.92719,17.92719,0,0,0,5.26377-4.1898,17.72211,17.72211,0,0,0,.79116-22.21269,10.80268,10.80268,0,0,0-5.24888,2.75837,12.0126,12.0126,0,0,1-9.05244,19.84477H24.406a11.99688,11.99688,0,0,1,0-23.99376H41.75361a11.98425,11.98425,0,0,1,1.6782.13143,19.11994,19.11994,0,0,1,5.2892-4.54769,17.72972,17.72972,0,0,0-6.9674-1.41947H24.406a17.83261,17.83261,0,0,0,0,35.66522Z" />
      <path d="M75.594,32.16739H58.24639A17.70654,17.70654,0,0,0,50,34.204a17.92863,17.92863,0,0,0-5.26334,4.1898,17.72212,17.72212,0,0,0-.792,22.21262,10.80249,10.80249,0,0,0,5.24924-2.75786,12.01309,12.01309,0,0,1,9.05251-19.84542H75.594a11.99688,11.99688,0,0,1,0,23.99376H58.24639a11.98284,11.98284,0,0,1-1.678-.13136,19.12236,19.12236,0,0,1-5.28942,4.5477,17.73143,17.73143,0,0,0,6.96747,1.41939H75.594a17.83261,17.83261,0,0,0,0-35.66522Z" />
    </svg>
  );
};

const board1test: BoardProps = {
  userId: '1',
  words: ['BOOK', 'SHELF', 'LIFE', "MUSIC", "CITY", "BIRD"],
  // status: ['book', 's____', 'l___', 'm________', 'c____', 'B___'],
  status: [['B', 'O', 'O', 'K'], ['S', '_', '_', '_', '_'], ['L', '_', '_', '_'], ['M', '_', '_', '_', '_',], ['C', '_', '_', '_',], ['B', '_', '_', '_']],
  entered: [1, 0, 0, 0, 0, 0],
}

const board2test: BoardProps = {
  userId: '2',
  words: ['BOOK', 'SHELF', 'LIFE', "MUSIC", "CITY", "BIRD"],
  // status: ['book', 's____', 'l___', 'm________', 'c____', 'B___'],
  status: [['B', 'O', 'O', 'K'], ['S', '_', '_', '_', '_'], ['L', '_', '_', '_'], ['M', '_', '_', '_', '_',], ['C', '_', '_', '_',], ['B', '_', '_', '_']],
  entered: [1, 0, 0, 0, 0, 0],
}

function App() {
  const [board1, setBoard1] = useState<BoardProps>(board1test);
  const [board2, setBoard2] = useState<BoardProps>(board2test);
  const [currentTurn, setCurrentTurn] = useState<number>(1);

  return (
    <div className='flex justify-center items-center min-h-svh'>
      <div className='flex flex-col items-center'>
        <div className='flex items-center'>
          <p />
          <h1 className='font-bold text-center items-center'>
            <span>Chain</span>
            <ChainLink />
            <span>Link</span>
          </h1>
        </div>
        <Separator className='h-[1px] bg-gray-600 w-full mb-2' />
        <Tabs defaultValue="player1" onValueChange={(value) => setCurrentTurn(value == 'player1' ? 1 : 2)}>
          <TabsList>
            <TabsTrigger value="player1">User1</TabsTrigger>
            <TabsTrigger value="player2">User2</TabsTrigger>
          </TabsList>
          <TabsContent value="player1"><Board board={board1} /></TabsContent>
          <TabsContent value="player2"><Board board={board2} /></TabsContent>
        </Tabs>
        <Keyboard board={currentTurn == 1 ? board1 : board2} setBoard={currentTurn == 1 ? setBoard1 : setBoard2} />
      </div>
    </div>
  );
}

export default App;
